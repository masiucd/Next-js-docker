import * as React from 'react';
import { StyleBalanceWrapper } from './Styled.Parts';

interface P {

}

const Balance: React.FC<P> = () => {
  let a;
  return (
    <StyleBalanceWrapper>
      {' '}
      <h3> Balance: </h3>
      {' '}
    </StyleBalanceWrapper>
  );
};
export default Balance;
