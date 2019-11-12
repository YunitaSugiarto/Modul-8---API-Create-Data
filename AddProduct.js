import React from 'react'
import axios from 'axios'

class AddProduct extends React.Component{
constructor(){
    super()
    this.state={
        poduct_id : '',
        product_name : '',
        product_price : '',
    }
}

handleChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value })
}

handleSubmit = async(e) => {
    e.preventDefault()
    console.log(this.state)
    await axios.post("http://localhost/reactapi/addProduct.php", this.state)
    this.props.history.push('/product');
}
render(){
    return(
        <div>
            <h5>Tambah Product</h5>
            <hr/>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="product_id">Product Id</label>
                <input type="text" className="form-control" name="product_id" placeholder="Enter Product Id" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label for="product_name">Product Name</label>
                <input type="text" className="form-control" name="product_name" placeholder="Enter Product Name" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label for="product_price">Product Price</label>
                <input type="text" className="form-control" name="product_price" placeholder="Enter Product Price" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
}

export default AddProduct
