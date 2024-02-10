import React, { useEffect } from "react";
import axios from "axios";
import '../App.css'

const ExpenseList = (props) => {
    const {expenses, setExpenses, monthId, budgetLeft, setBudgetLeft, setTotalBudget} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/month/${monthId}`)
            .then((res) => {
                // console.log(res.data.expenses)
                setExpenses(res.data.expenses)
                setTotalBudget(res.data.totalBudget)
                setBudgetLeft(() => {
                    let totalSpent = 0
                    res.data.expenses.map((expense) => {
                        totalSpent += Number(expense.price)
                    })
                    return (res.data.totalBudget - totalSpent)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [monthId])

    const deleteHandler = (expenseId, expensePrice) => {
        axios.put(`http://localhost:8000/api/month/${monthId}/expense/delete/${expenseId}`)
            .then(() => {
                setExpenses(expenses.filter(expense => expense._id !== expenseId))
                setBudgetLeft(budgetLeft + expensePrice)
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
                                <td><button onClick={(e) => deleteHandler(expense._id, expense.price)}>delete</button></td>
                            </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList