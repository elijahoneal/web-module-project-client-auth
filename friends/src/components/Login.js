import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialValues = { username: '', password: '' }

const Login = () => {
    const [formValues , setFormValues] = useState(initialValues) 

  

    const onChange = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/friends', formValues)
        .then( res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
        } )
        .catch( err => console.log(err))
        
    }


    return (
        <form onSubmit={onSubmit}>
            <label>
                Username
                <input 
                    name = 'username'
                    type = 'text'
                    onChange = {onChange}
                    value = {formValues.username}
                />
            </label>
            <label>
                Password
                <input 
                    name = 'password'
                    type = 'password'
                    onChange = {onChange}
                    value = {formValues.password}
                />
            </label>
            <button type = 'submit' >Login</button>
        </form>
    )
}

export default Login