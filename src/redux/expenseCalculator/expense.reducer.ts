import { IExpenseState, ExpenseActionType, ActionTypesIncome } from './expense.types';


const initialState: IExpenseState = {
  transactions: [],
  current: null,
};


export default (state: IExpenseState = initialState, action: ExpenseActionType) => {
  switch (action.type) {
    case ActionTypesIncome.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionTypesIncome.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case ActionTypesIncome.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypesIncome.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case ActionTypesIncome.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
