import * as React from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListFormWrapper } from './Styles.List';
import { AppState } from '../../../redux';
import { getExpenseData } from '../../../redux/expenseCalculator/expense.selector';
import { IExpenseData } from '../../../utils/expenseData';
import ListItem from './ListItem';
import ListForm from './ListForm';


interface P {
  expenses: IExpenseData[];
}

const List: React.FC<P> = ({ expenses }) => (
  <ListWrapper>
    {expenses.length > 0 ? expenses.map(
      (x) => <ListItem key={x.id} item={x} />,
    ) : <h3 className="no-items-msg">No Expenses , please add some</h3> }
    <ListFormWrapper>
      <ListForm />
    </ListFormWrapper>
  </ListWrapper>
);


const mapStateToProps = (state: AppState) => ({
  expenses: getExpenseData(state),
});


export default connect(mapStateToProps)(List);
