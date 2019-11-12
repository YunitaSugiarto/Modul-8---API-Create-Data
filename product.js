import React from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import {Link } from 'react-router-dom'

class Product extends React.Component{
  constructor(){
    super()
    this.state = {
      product : []
    }
  }

  async componentDidMount(){
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
      }))
      console.log(this.state)
  }

  render(){
    const renderData = this.state.product.map( product=>{
    return(
        <CardProduct product={product} key={product.id}/>
    )
  })
  return(
    <div>
    <h5>Data Product</h5>
    <table className='table'>
    <thead className='thead-dark'>
    <tr>
    <th scope='col'>Product_Id</th>
    <th scope='col'>Product_Name</th>
    <th scope='col'>Product_Price</th>
    </tr>
    </thead>
    <tbody>
    {renderData}
    </tbody>
    </table>
      <Link className="btn btn-dark" to={'/addProduct'}>Tambah Product</Link>
    </div>
  )
}
}

export default Product
