import React, { useState } from 'react'
import axios from 'axios'

const ExpenseForm = (props) => {
    const {setExpenses, monthId, budgetLeft, setBudgetLeft} = props
    const [expenseName, setExpenseName] = useState("")
    const [price, setPrice] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newExpense = {expenseName, price}
        axios.put(`http://localhost:8000/api/month/${monthId}/expense/add`, newExpense)
            .then((res) => {
                setExpenses(res.data.expenses)
                setBudgetLeft(budgetLeft - price)
            })
            .catch(err => console.log(err))

            setExpenseName("")
            setPrice("")
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input type="text" placeholder='expense name' onChange={(e) => setExpenseName(e.target.value)} value={expenseName}/>
                <label>$</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
                <button>add</button>
            </div>
        </form>
    )
}

export default ExpenseForm