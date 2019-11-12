import React from 'react'

function CardProduct({product}){
  return(
    <tr>
    <th scope="row">{product.product_id}</th>
    <th scope="row">{product.product_name}</th>
    <th scope="row">{product.product_price}</th>
    </tr>
  )
}

export default CardProduct
