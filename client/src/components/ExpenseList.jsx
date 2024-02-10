import React, { useEffect } from "react";
import axios from "axios";
import '../App.css'

const ExpenseList = (props) => {
    const {expenses, setExpenses, monthId} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/month/${monthId}`)
            .then((res) => {
                // console.log(res.data.expenses)
                setExpenses(res.data.expenses)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [monthId])

    const deleteHandler = (expenseId) => {
        axios.put(`http://localhost:8000/api/month/${monthId}/expense/delete/${expenseId}`)
            .then(() => {
                setExpenses(expenses.filter(expense => expense._id !== expenseId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <table className="margin-0-auto">
                <tbody>
                {
                    expenses.map((expense) => (
                            <tr key={expense._id}>
                                <td>{expense.expenseName}</td>
                                <td>${expense.price}</td>
                                <td><button onClick={(e) => deleteHandler(expense._id)}>delete</button></td>
                            </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList