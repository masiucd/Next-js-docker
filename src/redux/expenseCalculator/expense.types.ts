/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IExpenseData } from '../../utils/expenseData';


export interface IExpenseState{
  transactions: IExpenseData[];
  current: null | IExpenseData;
}


export enum ActionTypesIncome{
  GET_TRANSACTIONS='GET_TRANSACTIONS',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
}

export interface GetTransactionAction {
  type: ActionTypesIncome.GET_TRANSACTIONS;
  payload: IExpenseData[];
}

export interface AddNewTransactionAction {
  type: ActionTypesIncome.ADD_TRANSACTION;
  payload: IExpenseData;
}


export interface UpdateTransactionAction {
  type: ActionTypesIncome.UPDATE_TRANSACTION;
  payload: IExpenseData;
}

export interface RemoveTransactionAction {
  type: ActionTypesIncome.DELETE_TRANSACTION;
  payload: string;
}

export interface SetCurrentAction {
  type: ActionTypesIncome.SET_CURRENT;
  payload: IExpenseData;
}

export interface ClearCurrentAction {
  type: ActionTypesIncome.CLEAR_CURRENT;

}


export type ExpenseActionType =
  GetTransactionAction
  | UpdateTransactionAction
  | RemoveTransactionAction
  | SetCurrentAction
  | ClearCurrentAction
  | AddNewTransactionAction
