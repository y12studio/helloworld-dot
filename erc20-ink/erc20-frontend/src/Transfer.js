import React, { useState } from 'react';
import { Form, Input, Grid, Label, Icon, Button } from 'semantic-ui-react';
import { TxButton } from './substrate-lib/components';
import { useSubstrate } from './substrate-lib';
import metadata from './ERC20Mtadata.json';
import { Abi, ContractPromise } from '@polkadot/api-contract';

const DefaultGasLimit = 300000n * 1000000n;
const TokenContractAddress = '5CtA447RarL817AQKwgatEJ1ByoMbebkmC5SGxVMGxVsTZJX';
const abi = new Abi(metadata);

export default function Main (props) {
  const [status, setStatus] = useState(null);
  const [formState, setFormState] = useState({ addressTo: null, amount: 0 });
  const { accountPair } = props;

  const { api, keyring } = useSubstrate();
  const accounts = keyring.getPairs();
  const y12Token =  new ContractPromise(api, abi, TokenContractAddress);

  const onChange = (_, data) =>
    setFormState(prev => ({ ...prev, [data.state]: data.value }));

  const { addressTo, amount } = formState;

  const handleClick = async () => {
    //console.log("account pair", accountPair)
    const { address } = accountPair
    const value = await y12Token.tx
      .transfer( 0, DefaultGasLimit, addressTo, amount)
      .signAndSend(accountPair, (result) => {
        if (result.status.isInBlock) {
          console.log("in a block")
        } else if (result.status.isFinalized) {
          console.log("finalized")
        }
      })
  }

  return (
    <Grid.Column width={8}>
      <h1>ERC20 Y12Token Transfer</h1>
      <Form>
        <Form.Field>
          <Input
            fluid
            label='To'
            type='text'
            placeholder='address'
            state='addressTo'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Amount'
            type='number'
            state='amount'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field style={{ textAlign: 'center' }}>
        <Button
            basic
            color="blue"
            type="submit"
            onClick={handleClick}
            // TODO not handled disabled
          >
            Submit
          </Button>
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}
