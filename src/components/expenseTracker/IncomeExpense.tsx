import * as React from 'react';
import { StyleExpenseVsBalance } from './Styled.Parts';

interface P {

}

const IncomeExpense: React.FC<P> = () => {
  let a;
  return (
    <StyleExpenseVsBalance>
      <div className="income"><span>income:</span></div>
      <div className="expense"><span>expense:</span></div>
    </StyleExpenseVsBalance>
  );
};
export default IncomeExpense;
