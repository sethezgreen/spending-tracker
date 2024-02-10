import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MonthForm = (props) => {
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [totalBudget, setTotalBudget] = useState("")
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/create', {
            month,
            year,
            totalBudget
        })
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

            setMonth("")
            setYear("")
            setTotalBudget("")
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
                <input type="submit" value="create" />
            </form>
        </div>
    )
}

export default MonthForm