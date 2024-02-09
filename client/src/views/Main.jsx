import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../components/ExpenseList'

const Main = (props) => {
    const [months, setMonths] = useState([])
    const [monthId, setMonthId] = useState("65c58ba8d1a7b497ff69d233")

    return (
        <div>
            <h1>Spending Tracker</h1>
            <Link to={`/month/create`}>Add Month</Link>
            <p>Expenses</p>
            <ExpenseList id={monthId}/>
        </div>
    )
}

export default Main