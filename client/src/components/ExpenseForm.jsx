import React, { useState } from 'react'
import axios from 'axios'

const ExpenseForm = (props) => {
    const {expenses, setExpenses, monthId} = props
    const [expenseName, setExpenseName] = useState("")
    const [price, setPrice] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newExpense = {expenseName, price}
        axios.put(`http://localhost:8000/api/month/${monthId}/expense/add`, newExpense)
            .then((res) => {
                console.log(res)
                setExpenses(res.data.expenses)
                // console.log(expenses)
            })
            .catch(err => console.log(err))

            setExpenseName("")
            setPrice("")
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input type="text" onChange={(e) => setExpenseName(e.target.value)} value={expenseName}/>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
                <button>add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm