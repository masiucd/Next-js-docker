/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { IExpenseData } from '../../../utils/expenseData';
import { StyledListItem } from './Styles.List';
import { deleteExpenses } from '../../../redux/expenseCalculator/expense.actions';


interface P {
  item: IExpenseData;
  deleteExpenses: (id: string) => void;
}

const ListItem: React.FC<P> = ({ item, deleteExpenses }) => {
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
        <span onClick={() => deleteExpenses(id)}>Delete</span>
      </div>
    </StyledListItem>
  );
};

export default connect(null, { deleteExpenses })(ListItem);
