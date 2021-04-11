import React from 'react'


const FriendCard = ({friend}) => {
   
    return (
        <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email}</p>
            <p>Age: {friend.age}</p>
        </div>
    )
}

export default FriendCard