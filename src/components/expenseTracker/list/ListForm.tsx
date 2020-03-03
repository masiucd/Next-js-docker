/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { StyledListForm, Input } from './Styles.List';

interface P {

}
interface IFormData{
  title: string;
  amount: number;
}

const ListForm: React.FC<P> = () => {
  const [formData, setFormData] = React.useState<IFormData>({
    title: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { title, amount } = formData;
  return (
    <StyledListForm>
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
export default ListForm;
