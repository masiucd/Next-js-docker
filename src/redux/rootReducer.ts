/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import expenseReducer from './expenseCalculator/expense.reducer';

export default combineReducers({
  expenseTracker: expenseReducer,
});
