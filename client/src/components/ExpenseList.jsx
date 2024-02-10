import React, { useEffect, useState } from "react";
import axios from "axios";

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
    }, [])

    return (
        <div>
            {
                expenses.map((expense) => (
                    <div key={expense._id}>
                        <p>{expense.expenseName}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ExpenseList