/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledListForm, Input } from './Styles.List';
import { addNewTransaction } from '../../../redux/expenseCalculator/expense.actions';

const uuid = require('uuid/v4');

interface P {
  addNewTransaction: Function;
}
interface IFormData{
  title: string;
  amount: string;
}

const ListForm: React.FC<P> = ({ addNewTransaction }) => {
  const [formData, setFormData] = React.useState<IFormData>({
    title: '',
    amount: '',
  });
  const { title, amount } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length > 0 && amount.length > 0) {
      addNewTransaction({
        id: uuid(),
        title,
        amount: Number(amount),
      });
      setFormData({ title: '', amount: '' });
    }
  };

  return (
    <StyledListForm onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Title</span>
        <Input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label htmlFor="amount">
        <span>amount</span>
        <Input type="text" name="amount" value={amount} onChange={handleChange} />
      </label>
      <button type="submit">Add Transaction</button>
    </StyledListForm>
  );
};

export default connect(null, { addNewTransaction })(ListForm);
