/* eslint-disable import/extensions */
import {
  ActionTypesIncome, GetTransactionAction, RemoveTransactionAction, AddNewTransactionAction, SetCurrentAction, ClearCurrentAction, UpdateTransactionAction,
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

export const setCurrentTransaction = (current: IExpenseData): SetCurrentAction => ({
  type: ActionTypesIncome.SET_CURRENT,
  payload: current,
});

export const clearCurrentTransaction = (): ClearCurrentAction => ({
  type: ActionTypesIncome.CLEAR_CURRENT,
});

export const updateTransaction = (formData: IExpenseData): UpdateTransactionAction => ({
  type: ActionTypesIncome.UPDATE_TRANSACTION,
  payload: formData,
});
