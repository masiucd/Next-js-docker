import { createSelector } from 'reselect';
import { AppState } from '..';
import { IExpenseState } from './expense.types';


const selectExpenseState = (state: AppState) => state.expenseTracker;


export const getExpenseData = createSelector(
  [selectExpenseState],
  (state: IExpenseState) => state.transactions,
);


export const selectCurrentExpense = createSelector(
  [selectExpenseState],
  (state: IExpenseState) => state.current,
);


export const selectCalculateBalance = createSelector(
  [selectExpenseState],
  (state: IExpenseState) => state.transactions.reduce((acc, cur) => Math.floor(acc + cur.amount), 0),
);

export const selectCalculateExpense = createSelector(
  [selectExpenseState],
  (incomeState: IExpenseState) => incomeState.transactions.map(
    (x) => (x.amount < 0 ? x.amount : 0),
  ).reduce((acc, exp) => acc + exp, 0),
);


export const selectCalculateIncome = createSelector(
  [selectExpenseState],
  (incomeState: IExpenseState) => incomeState.transactions.map(
    (x) => (x.amount > 0 ? x.amount : 0),
  ).reduce((acc, income) => acc + income, 0),
);
