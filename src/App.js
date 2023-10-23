import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenseitem from './components/Expenses/Expenseitem';
import Expenses from './components/Expenses/Expense';
import { useState } from 'react';

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  const[expenses, setExpenses]=useState(Dummy_Expense)
  
  const AddexpensedataHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses];
    })
  }
  

  return (
    <div >
      <h1 className=" App" >Lets get Started </h1>
      <NewExpense 
      onAddExpense={AddexpensedataHandler}/>
      <Expenses items={expenses}
       
      />
      
      {/* <Expenseitem

        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}

      />
      <Expenseitem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} />
      <Expenseitem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} /> */}
    
    </div>
  );
}

export default App;
