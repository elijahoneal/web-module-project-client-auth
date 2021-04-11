import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, { useEffect, useState } from 'react'


const Friends = () => {
    const [friendData, setFriendData] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
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