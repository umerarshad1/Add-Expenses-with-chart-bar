import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForum from './ExpenseForum'
function NewExpense(props) {


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString()

    }
    props.onAddExpense(expensedata)

  }

  const [isediting, setIsEditing] = useState(false)
  const startEditingHandler = () => {
    setIsEditing(true)
  }
const stopEditing = ()=>{
  setIsEditing(false)
}

  return (
    <div className='new-expense'>
      {!isediting && <button onClick={startEditingHandler} >Add new Expense</button>}
      {isediting && <ExpenseForum
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel = {stopEditing}
        />}
    </div>
  )
}

export default NewExpense