import * as React from 'react';
import Title from '../styled/layout/title/Title';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import List from './list/List';

interface P {

}

const ExpenseTracker: React.FC<P> = () => {
  let a;
  return (
    <div>
      <Title mainTitle="Income Tracker" subTitle="keep your income in control" />
      <Balance />
      <IncomeExpense />
      <List />
    </div>
  );
};
export default ExpenseTracker;
