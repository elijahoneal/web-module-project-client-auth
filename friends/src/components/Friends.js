import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Friends = () => {
    const [friendData, setFriendData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        } )
    },[] )
    return (
        <div></div>
    )
}

export default Friends