import * as React from 'react';
import { connect } from 'react-redux';
import { StyleExpenseVsBalance } from './Styled.Parts';
import { AppState } from '../../redux';
import { selectCalculateIncome, selectCalculateExpense } from '../../redux/expenseCalculator/expense.selector';


interface P {
  income: number;
  expense: number;
}

const IncomeExpense: React.FC<P> = ({ income, expense }) => (
  <StyleExpenseVsBalance>
    <div className="income">
      <span>
        income:
        {income}
      </span>
    </div>
    <div className="expense">
      <span>
        expense:
        {expense}
      </span>
    </div>
  </StyleExpenseVsBalance>
);


const mapStateToProps = (state: AppState) => ({
  income: selectCalculateIncome(state),
  expense: selectCalculateExpense(state),
});

export default connect(mapStateToProps)(IncomeExpense);
