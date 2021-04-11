import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, { useEffect, useState } from 'react'
import FriendCard from './FriendCard'
import AddFriend from './AddFriend'
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
        const postFriend = (data) => {
            axiosWithAuth().post('/friends',data)
            .then(res => {
                console.log(res)
                setFriendData( res.data)
            })
            .catch( err => {
                console.log(err)
            } )
    }
   
    return (
        <>
        <AddFriend postFriend = {postFriend} />
        {friendData.map( friend => {
           return <FriendCard friend = {friend}/>
        } )}
        </>
    )
}

export default Friends