import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../components/ExpenseList'
import ExpenseForm from '../components/ExpenseForm'
import MonthSelect from '../components/MonthSelect'

const Main = () => {
    const [monthId, setMonthId] = useState("65c6eaa6875fd16dafd8b7c7")
    const [expenses, setExpenses] = useState([])

    return (
        <div>
            <h1>Spending Tracker</h1>
            <MonthSelect setMonthId={setMonthId}/>
            <Link to={`/month/create`}>Add Month</Link>
            <p>Expenses</p>
            <ExpenseForm monthId={monthId} expenses={expenses} setExpenses={setExpenses}/>
            <ExpenseList id={monthId} expenses={expenses} setExpenses={setExpenses}/>
        </div>
    )
}

export default Main