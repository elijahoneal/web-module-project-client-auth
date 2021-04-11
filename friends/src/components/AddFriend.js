import React, { useState } from 'react'



const initialFriendValues = {
    id: '',
    name: '',
    age: '',
    email: ''
}

const AddFriend = ({postFriend}) => {
    const [friendValue , setFriendValue] = useState(initialFriendValues)

    const onChange = e => {
        setFriendValue({...friendValue, [e.target.name]: e.target.value })
        console.log(friendValue)
    }

   

    const onSubmit = e => {
        e.preventDefault()
        postFriend(friendValue)

    }

    return(
        <form onSubmit = {onSubmit}>
            <label>
                Name
                <input
                    name = 'name'
                    type = 'text'
                    onChange = {onChange}
                    value = {friendValue.name}
                />
            </label>
            <label>
                Age
                <input
                    name = 'age'
                    type = 'number'
                    onChange = {onChange}
                    value = {friendValue.age}
                />
            </label>
            <label>
                Email
                <input
                    name = 'email'
                    type = 'email'
                    onChange = {onChange}
                    value = {friendValue.email}
                />
            </label>
            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default AddFriend