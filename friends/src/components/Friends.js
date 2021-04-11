import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, { useEffect, useState } from 'react'
import FriendCard from './FriendCard'

const Friends = () => {
    const [friendData, setFriendData] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res)
            setFriendData( res.data)
        })
        .catch( err => {
            console.log(err)
        } )
    },[] )
    return (
        <>
        {friendData.map( friend => {
           return <FriendCard friend = {friend}/>
        } )}
        </>
    )
}

export default Friends