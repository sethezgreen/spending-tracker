import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const ExpenseList = (props) => {
    const {expenses, setExpenses, id} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/month/${id}`)
            .then((res) => {
                // console.log(res.data.expenses)
                setExpenses(res.data.expenses)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <table className="margin-0-auto">
                <tbody>
                {
                    expenses.map((expense) => (
                            <tr key={expense._id}>
                                <td>{expense.expenseName}</td>
                                <td>${expense.price}</td>
                            </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList