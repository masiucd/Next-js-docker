import { ActionTypesIncome, GetTransactionAction, RemoveTransactionAction } from './expense.types';
import expenseData from '../../utils/expenseData';


export const getExpenses = (): GetTransactionAction => ({
  type: ActionTypesIncome.GET_TRANSACTIONS,
  payload: expenseData,
});

export const deleteExpenses = (id: string): RemoveTransactionAction => ({
  type: ActionTypesIncome.DELETE_TRANSACTION,
  payload: id,
});
