import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'

const ColorFactory = ({colors}) => {
    const navigate = useNavigate();
    const [colorsArr, setColorsArr] = useState(colors)
    const [formData, setFormData] = useState({
        color: ''
    })

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let color = evt.target.color.value
        colorsArr.push(color)
        navigate('/colors')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='color' placeholder="color" onChange={handleChange}></input>
                <button>Submit!</button>
            </form>
        </>
    )
}

export default ColorFactory