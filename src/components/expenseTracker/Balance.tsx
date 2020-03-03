/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyleBalanceWrapper } from './Styled.Parts';
import { AppState } from '../../redux';
import { selectCalculateBalance } from '../../redux/expenseCalculator/expense.selector';


interface P {
  currentBalance: number;
}

const Balance: React.FC<P> = ({ currentBalance }) => (
  <StyleBalanceWrapper>
    {' '}
    <h3>
      Balance:
      {currentBalance}
    </h3>
    {' '}
  </StyleBalanceWrapper>
);

const mapStateToProps = (state: AppState) => ({
  currentBalance: selectCalculateBalance(state),
});
export default connect(mapStateToProps)(Balance);
