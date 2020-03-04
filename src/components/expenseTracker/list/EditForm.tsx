import * as React from 'react';
import { connect } from 'react-redux';
import { StyledListForm, Input } from './Styles.List';
import { getCurrent } from '../../../redux/expenseCalculator/expense.selector';
import { AppState } from '../../../redux/index';
import { IExpenseData } from '../../../utils/expenseData';
import { updateTransaction } from '../../../redux/expenseCalculator/expense.actions';


interface P {
  currentTransaction: IExpenseData | any;
  updateTransaction: Function;
  toggleEditForm: () => void;
}

const EditForm: React.FC<P> = ({ currentTransaction, updateTransaction, toggleEditForm }) => {
  const [formData, setFormData] = React.useState({
    title: '',
    amount: '',
  });

  const { title, amount } = formData;
  React.useEffect(() => {
    if (currentTransaction !== null) {
      setFormData(currentTransaction);
    } else {
      setFormData({
        title: '',
        amount: '',
      });
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTransaction({
      title,
      amount: Number(amount),
    });
  };

  return (
    <>
      <StyledListForm onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>title</span>
          <Input type="text" name="title" value={title} onChange={handleChange} />
        </label>
        <label htmlFor="amount">
          <span>title</span>
          <Input type="text" name="amount" value={amount} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </StyledListForm>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentTransaction: getCurrent(state),
});


export default connect(mapStateToProps, { updateTransaction })(EditForm);
