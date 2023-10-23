import React, { useState } from 'react'
import './ExpenseForum.css'
function ExpenseForum(props) {

    const [enteredtitle, setTitle] = useState()
    const [enteredamount, setAmount] = useState()
    const [entereddate, setDate] = useState()
    const [enterdata, setData]=useState()
    // const inputData=(identifier,value)=>{
    //     if(identifier='title'){
    //         setTitle(value)
    //     }
    //     else if(identifier='amount'){
    //         setAmount(value)
    //     }
    //     else
    //     (setData(value))

    // }

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }
    const dataHandler=(event)=>{
        event.preventDefault();
            const expenseData={
                title:enteredtitle,
                amount:enteredamount,
                date: new Date(entereddate)


            }
            props.onSaveExpenseData(expenseData);
            setTitle('')
            setAmount('')
            setDate('')
    }


    



    return (
        <div>
            <form onSubmit={dataHandler} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label className='new-expense__control label'  >Title</label>
                        <input className='new-expense__control input' value={enteredtitle} onChange={titleHandler} type="text" />
                    </div>
                    <div className='new-expense__control'>
                        <label className='new-expense__control label' >Amount</label>
                        <input className='new-expense__control input' value={enteredamount}  onChange={amountHandler} type="number" min='0.01' step='0.01' />
                    </div>
                    <div className='new-expense__control'>
                        <label className='new-expense__control label' >Date</label>
                        <input className='new-expense__control input' value={entereddate} onChange={dateHandler} type="date" min='2019-1-1' />
                    </div>
                </div>
                <div className='new-expense__actions'>

                    <button type='submit'  >Add Expense</button>
                    <button type='button' onClick={props.onCancel}  >Cancel</button>
                    
                </div>
            </form>
        </div>
    )
}

export default ExpenseForum