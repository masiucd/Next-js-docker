import * as React from 'react';
import { IExpenseData } from '../../../utils/expenseData';
import { StyledListItem } from './Styles.List';

interface P {
  item: IExpenseData;
}

const ListItem: React.FC<P> = ({ item }) => {
  const { id, title, amount } = item;
  return (
    <StyledListItem>
      <span>
        Title:
        {' '}
        {title}
      </span>
      <span>
        Amount:
        {' '}
        {amount}
        $
      </span>
      <div className="btn-group">
        <span>Edit</span>
        <span>Delete</span>
      </div>
    </StyledListItem>
  );
};
export default ListItem;
