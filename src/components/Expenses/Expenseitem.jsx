import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const ExpenseItem = (props) => {
  let [title, setTitle]=useState(props.title)
  
  function Ctitile(){
    setTitle('updated')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div >
      <button onClick={Ctitile} >ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;