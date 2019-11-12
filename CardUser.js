import React from 'react'

function CardUser({user}){
  return(
    <tr>
    <th scope="row">{user.id}</th>
    <th scope="row">{user.nama}</th>
    <th scope="row">{user.alamat}</th>
    </tr>
  )
}

export default CardUser
