import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const initialValues = { username: '', password: '' }



const Login = () => {
    const [formValues , setFormValues] = useState(initialValues) 
    let history =useHistory();
  

    const onChange = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', formValues)
        .then( res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            history.push('/friends')
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