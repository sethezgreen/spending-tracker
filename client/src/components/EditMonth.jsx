import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MonthForm from "./MonthForm";

const EditMonth = (props) => {
    const {monthId} = useParams()
    const navigate = useNavigate()
    const [monthObject, setMonthObject] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/month/${monthId}`)
            .then((res) => {
                setMonthObject(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err))
    },[])

    const updateMonth = updatedMonthObject => {
        axios.put(`http://localhost:8000/api/updateMonth/${monthId}`, updatedMonthObject)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {
                loaded && (
                    <div>
                        <MonthForm onSubmitProp={updateMonth} submitText="update" initialMonth={monthObject.month} initialYear={monthObject.year} initialTotalBudget={monthObject.totalBudget}/>
                    </div>
                )
            }
        </div>
    )
}

export default EditMonth