import * as React from 'react';
import { connect } from 'react-redux';
import { ListWrapper } from './Styles.List';
import { AppState } from '../../../redux';
import { getExpenseData } from '../../../redux/expenseCalculator/expense.selector';
import { IExpenseData } from '../../../utils/expenseData';
import ListItem from './ListItem';


interface P {
  expenses: IExpenseData[];
}

const List: React.FC<P> = ({ expenses }) => (
  <ListWrapper>
    {expenses.map((x) => <ListItem key={x.id} item={x} />)}
  </ListWrapper>
);


const mapStateToProps = (state: AppState) => ({
  expenses: getExpenseData(state),
});


export default connect(mapStateToProps)(List);
