import * as React from 'react';
import Title from '../styled/layout/title/Title';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import List from './list/List';
import { StyleHeader, StyleIncomeExpWrapper } from './Styled.Parts';

interface P {

}

const ExpenseTracker: React.FC<P> = () => {
  let a;
  return (
    <StyleIncomeExpWrapper>
      <StyleHeader>
        <Balance />
        <Title mainTitle="Income Tracker" subTitle="keep your income in control" />
      </StyleHeader>
      <IncomeExpense />
      <List />
    </StyleIncomeExpWrapper>
  );
};
export default ExpenseTracker;
