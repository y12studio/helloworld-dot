import React, { useEffect, useState } from 'react';
import { Table, Grid, Button } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSubstrate } from './substrate-lib';
import metadata from './ERC20Mtadata.json';
import { Abi, ContractPromise } from '@polkadot/api-contract';

const DefaultGasLimit = 300000n * 1000000n;
const TokenContractAddress = '5CtA447RarL817AQKwgatEJ1ByoMbebkmC5SGxVMGxVsTZJX';
const abi = new Abi(metadata);

export default function Main (props) {
  const { api, keyring } = useSubstrate();
  const accounts = keyring.getPairs();
  const [balances, setBalances] = useState({});

  const y12Token = new ContractPromise(api, abi, TokenContractAddress);

  async function updateBalances (addresses) {
    const r = {};
    await Promise.all(addresses.map( async (address) => {
      const q = await y12Token.query.balanceOf(address, 0, DefaultGasLimit, address);
      r[address] = q.output.toNumber();
    }));
    setBalances(r);
  }

  useEffect(() => {
    const addresses = keyring.getPairs().map(account => account.address);
    let unsubscribeAll = null;

    api.query.system.account
      .multi(addresses, balances => {
        updateBalances(addresses);
      }).then(unsub => {
        unsubscribeAll = unsub;
      }).catch(console.error);

    return () => unsubscribeAll && unsubscribeAll();
  }, [api, keyring, setBalances]);

  return (
    <Grid.Column>
      <h1>ERC20 Y12Token Balances</h1>
      <Table celled striped size='small'>
        <Table.Body>{accounts.map(account =>
          <Table.Row key={account.address}>
            <Table.Cell width={3} textAlign='right'>{account.meta.name}</Table.Cell>
            <Table.Cell width={10}>
              <span style={{ display: 'inline-block', minWidth: '31em' }}>
                {account.address}
              </span>
              <CopyToClipboard text={account.address}>
                <Button
                  basic
                  circular
                  compact
                  size='mini'
                  color='blue'
                  icon='copy outline'
                />
              </CopyToClipboard>
            </Table.Cell>
            <Table.Cell width={3}>{
              balances && balances[account.address] &&
              balances[account.address]
            }</Table.Cell>
          </Table.Row>
        )}
        </Table.Body>
      </Table>
    </Grid.Column>
  );
}
