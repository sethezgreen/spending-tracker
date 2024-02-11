import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../components/ExpenseList'
import ExpenseForm from '../components/ExpenseForm'
import MonthSelect from '../components/MonthSelect'

const Main = () => {
    const [monthId, setMonthId] = useState()
    const [monthTitle, setMonthTitle] = useState("")
    const [expenses, setExpenses] = useState([])
    const [totalBudget, setTotalBudget] = useState("")
    const [budgetLeft, setBudgetLeft] = useState("")

    return (
        <div>
            <h1>Spending Tracker</h1>
            <div>
                <MonthSelect setMonthId={setMonthId}/>
                <Link to={`/month/create`}>Add Month</Link>
            </div>
            <h2><Link to={`/month/edit/${monthId}`}>{monthTitle}</Link></h2>
            {
                monthId && (
                    <div>
                        <p>Total Budget: ${totalBudget}</p>
                        <p>Budget Left: ${budgetLeft}</p>
                        <p>Expenses</p>
                        <ExpenseForm monthId={monthId} setExpenses={setExpenses} budgetLeft={budgetLeft} setBudgetLeft={setBudgetLeft}/>
                        <ExpenseList monthId={monthId} expenses={expenses} setExpenses={setExpenses} budgetLeft={budgetLeft} setBudgetLeft={setBudgetLeft} setTotalBudget={setTotalBudget} setMonthTitle={setMonthTitle}/>
                    </div>
                )
            }
        </div>
    )
}

export default Main