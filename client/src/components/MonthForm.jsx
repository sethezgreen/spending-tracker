import React, { useState } from "react";
import {Link } from 'react-router-dom'

const MonthForm = (props) => {
    const {onSubmitProp, submitText, initialMonth, initialYear, initialTotalBudget} = props
    const [month, setMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    const [totalBudget, setTotalBudget] = useState(initialTotalBudget)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({month, year, totalBudget})
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Month:</label>
                    <select onChange={(e) => setMonth(e.target.value)} value={month || ""}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div>
                    <label>Year:</label>
                    <input type="number" onChange={(e) => setYear(e.target.value)} value={year || ""}/>
                </div>
                <div>
                    <label>Total Budget:</label>
                    <input type="number" onChange={(e) => setTotalBudget(e.target.value)} value={totalBudget || ""}/>
                </div>
                <input type="submit" value={submitText} />
            </form>
        </div>
    )
}

export default MonthForm