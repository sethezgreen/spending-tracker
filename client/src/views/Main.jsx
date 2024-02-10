import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../components/ExpenseList'
import ExpenseForm from '../components/ExpenseForm'
import axios from 'axios'

const Main = (props) => {
    const [months, setMonths] = useState([])
    const [monthId, setMonthId] = useState("65c6eaa6875fd16dafd8b7c7")
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/months')
            .then((res) => {
                setMonths(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>Spending Tracker</h1>
            <p>months</p>
            {
                months.map((month) =>(
                    <p key={month._id}>{month.month}</p>
                ))
            }
            <Link to={`/month/create`}>Add Month</Link>
            <p>Expenses</p>
            <ExpenseForm monthId={monthId} expenses={expenses} setExpenses={setExpenses}/>
            <ExpenseList id={monthId} expenses={expenses} setExpenses={setExpenses}/>
        </div>
    )
}

export default Main