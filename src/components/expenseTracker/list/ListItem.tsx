/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { IExpenseData } from '../../../utils/expenseData';
import { StyledListItem } from './Styles.List';
import { deleteExpenses, setCurrentTransaction } from '../../../redux/expenseCalculator/expense.actions';
import useTogge from '../../../hooks/useTogge';
import EditForm from './EditForm';


interface P {
  item: IExpenseData;
  deleteExpenses: (id: string) => void;
  setCurrentTransaction: Function;
}

const ListItem: React.FC<P> = ({ item, deleteExpenses, setCurrentTransaction }) => {
  const { id, title, amount } = item;
  const [showEditForm, toggleEditForm] = useTogge(false);


  const handleEdit = () => {
    setCurrentTransaction(item);
    toggleEditForm();
  };
  return (
    <>
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
          <span onClick={handleEdit}>Edit</span>
          <span onClick={() => deleteExpenses(id)}>Delete</span>
        </div>
      </StyledListItem>
      {showEditForm && <EditForm toggleEditForm={toggleEditForm} /> }
    </>
  );
};

export default connect(null, { deleteExpenses, setCurrentTransaction })(ListItem);
