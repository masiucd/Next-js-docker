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
import { AppState } from '../../redux';
import { getExpenseData } from '../../redux/expenseCalculator/expense.selector';
import { IExpenseData } from '../../utils/expenseData';

interface P {
  getExpenses: () => void;
  transactionsList: IExpenseData[];
}

const ExpenseTracker: React.FC<P> = ({ getExpenses, transactionsList }) => {
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

const mapStateToProps = (state: AppState) => ({
  transactionsList: getExpenseData(state),
});
export default connect(mapStateToProps, { getExpenses })(ExpenseTracker);
