import React from "react";
import ExpenseItem from "./Expenseitem";
import "./Expenseslist.css"


function Expenseslist(props) {
  return (
    <div>
        {props.items.length === 0 ? <p className="heading">no expense found.</p> : props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense?.title}
          amount={expense?.amount}
          date={expense?.date} />

      ))}

    </div>
  )
}

export default Expenseslist