/* eslint-disable import/extensions */
import React from 'react';
import Layout from './components/styled/layout/Layout';
import { AppWrapper } from './components/styled/wrappers/Wrappers';
import ExpenseTracker from './components/expenseTracker/ExpenseTracker';

function App() {
  return (
    <Layout>
      <AppWrapper>
        <ExpenseTracker />
      </AppWrapper>
    </Layout>

  );
}

export default App;
