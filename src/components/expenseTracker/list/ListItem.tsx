import * as React from 'react';
import { IExpenseData } from '../../../utils/expenseData';

interface P {
  item: IExpenseData;
}

const ListItem: React.FC<P> = ({ item }) => {
  const { id, title, amount } = item;
  return (
    <div>
      {' '}
      <h4>
        {' '}
        {title}
        {' '}
      </h4>
      {' '}
    </div>
  );
};
export default ListItem;
