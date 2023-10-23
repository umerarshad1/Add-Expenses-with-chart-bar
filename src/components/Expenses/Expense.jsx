import React, { useState } from 'react';
import Chart from '../Charts/Chart';
import Expenseslist from './Expenseslist';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {


  const [filteredyear, setFilteredYear] = useState('2020')



  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredyear;
  }
  )




  return (

    <Card className="expenses">

      <ExpensesFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler} />
        <ExpensesChart 
        expenses = {filteredExpense}/>
      <Expenseslist items = {filteredExpense} />
    
    </Card>
  );
}

export default Expenses;