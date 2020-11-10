import React, { useState } from 'react';
import { Form, Input, Grid, Label, Icon, Button } from 'semantic-ui-react';
import { TxButton } from './substrate-lib/components';
import { useSubstrate } from './substrate-lib';
const UNIT = 1000000000000;

export default function Main(props) {
  const [status, setStatus] = useState(null);
  const [formState, setFormState] = useState({ addressFrom: null, addressTo: null, amount: 0, threshold: 0, signatories: null });
  const { accountPair } = props;
  const { api } = useSubstrate();

  const onChange = (_, data) =>
    setFormState(prev => ({ ...prev, [data.state]: data.value }));

  const onSubmit = async () => {
    // Multisig address generation info
    // Addresses: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy
    // Threshold: 2
    // Multisig Address (SS58: 42): 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd

    // alice approve mulitsig
    // 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy,5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
    
    // bob approve mulitsig
    // 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy,5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
    console.log(formState)
    const tx = api.tx.balances.transfer(addressTo, amount * UNIT);
    console.log(tx.toHuman());
    const call = tx.method;
    const callData = call.toHex();
    const callHash = call.hash;
    console.log(`callData: ${callData}`)
    console.log(`callHash: ${callHash}`)
    const multisig = await api.query.multisig.multisigs(addressFrom, callHash);
    if (multisig.isSome) {
      console.log(multisig.toHuman());
      const timepoint = multisig.unwrap().when
      let mtx = api.tx.multisig.asMulti(threshold, signatories.split(','), timepoint, callData, false, 3000000000);
      mtx.signAndSend(accountPair);
    } else {
      let mtx = api.tx.multisig.approveAsMulti(threshold, signatories.split(','), null, callHash, 0);
      mtx.signAndSend(accountPair);
    }
  }

  const { addressFrom, addressTo, amount, threshold, signatories, timepoint } = formState;

  return (
    <Grid.Column width={8}>
      <h1>MultiSig Transfer</h1>
      <Form>
        <Form.Field>
          <Label basic color='teal'>
            <Icon name='hand point right' />
            1 Unit = 1000000000000
          </Label>
        </Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Multisig Address'
            type='text'
            placeholder='address'
            state='addressFrom'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Other Signatories'
            state='signatories'
            type='text'
            placeholder='comma separated sorted addresses'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Threshold'
            type='number'
            state='threshold'
            onChange={onChange}
          />
        </Form.Field>
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
            label='Submit'
            type='SIGNED-TX'
            onClick={onSubmit}
          />
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}
