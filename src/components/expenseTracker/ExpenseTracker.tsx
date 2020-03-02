/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import Title from '../styled/layout/title/Title';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import List from './list/List';
import { StyleHeader, StyleIncomeExpWrapper } from './Styled.Parts';
import { getExpenses } from '../../redux/expenseCalculator/expense.actions';

interface P {
  getExpenses: () => void;
}

const ExpenseTracker: React.FC<P> = ({ getExpenses }) => {
  React.useEffect(() => {
    getExpenses();
  }, []);

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


export default connect(null, { getExpenses })(ExpenseTracker);
