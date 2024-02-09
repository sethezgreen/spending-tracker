import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = (props) => {
    const [months, setMonths] = useState([])

    return (
        <div>
            <h1>Spending Tracker</h1>
            <Link to={`/month/create`}>Add Month</Link>
        </div>
    )
}

export default Main