/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid/v4';

export interface IExpenseData {
  id: string;
  title: string;
  amount: number;
}


const expenseData: IExpenseData[] = [
  {
    id: uuid(),
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

export default expenseData;
