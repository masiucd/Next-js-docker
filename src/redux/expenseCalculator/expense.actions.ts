/* eslint-disable import/extensions */
import {
  ActionTypesIncome, GetTransactionAction, RemoveTransactionAction, AddNewTransactionAction,
} from './expense.types';
import { expenseData, IExpenseData } from '../../utils/expenseData';


export const getExpenses = (): GetTransactionAction => ({
  type: ActionTypesIncome.GET_TRANSACTIONS,
  payload: expenseData,
});

export const deleteExpenses = (id: string): RemoveTransactionAction => ({
  type: ActionTypesIncome.DELETE_TRANSACTION,
  payload: id,
});


export const addNewTransaction = (formData: IExpenseData): AddNewTransactionAction => ({
  type: ActionTypesIncome.ADD_TRANSACTION,
  payload: formData,
});
