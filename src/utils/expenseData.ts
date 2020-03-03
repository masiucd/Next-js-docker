/* eslint-disable @typescript-eslint/interface-name-prefix */
// import uuid from 'uuid/v';
const uuid = require('uuid/v4');
// import * as uuid from 'uuid/v4';


export interface IExpenseData {
  id: string;
  title: string;
  amount: number;
}


export const expenseData: IExpenseData[] = [
  {
    id: uuid(),
    // id: 'lo21212!!@@@1',
    title: 'Vacation',
    amount: -300,
  },
  {
    id: uuid(),
    title: 'income',
    amount: +1200,
  },
  {
    id: uuid(),
    title: 'Lunch',
    amount: -5,
  },
  {
    id: uuid(),
    title: 'cinema movie',
    amount: -8,
  },
];
