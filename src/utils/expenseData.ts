/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid';

export interface IExpenseData {
  id: string;
  title: string;
  amount: number;
}


const expenseData: IExpenseData[] = [
  {
    // id: uuid,
    id: 'lo21212!!@@@1',
    title: 'Vacation',
    amount: -300,
  },
  {
    id: 'losda@#12',
    title: 'income',
    amount: +1200,
  },
  {
    id: 'apa3@@@1122',
    title: 'Lunch',
    amount: -5,
  },
  {
    id: 's231232100sa',
    title: 'cinema movie',
    amount: -8,
  },
];

export default expenseData;
