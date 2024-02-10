import React, { useState, useEffect } from "react";
import axios from "axios";

const MonthSelect = (props) => {
    const {setMonthId} = props
    const [months, setMonths] = useState([])
    const [dropdown, setDropdown] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/months')
            .then((res) => {
                console.log(res)
                setMonths(res.data)
                generateDropdown(res.data)
            })
            .catch(err => console.log(err))
        },[])
        
    const generateDropdown = (months) => {
        const options = [months.map((month) => {
            return (
                <option value={month._id} >{month.month}</option>
            )
        })]
        console.log(options)
        setDropdown(options)
    }

    return (
        <select onChange={(e) => setMonthId(e.target.value)}>
            <option selected>select</option>
            {
                dropdown.map((option) => (
                    option
                ))
            }
        </select>
    )
}

export default MonthSelect