import React from 'react'
import { Link, useParams } from 'react-router-dom'

function UserBuId() {
    let { id } = useParams()
    return (
        <div>User={id}</div>
    )


}
export default UserBuId
