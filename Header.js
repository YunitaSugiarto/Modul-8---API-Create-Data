import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import Product from './Product'
import AddUser from './AddUser'
import AddProduct from './AddProduct'

class Header extends React.Component{
  render(){
    return(
      <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

      <a className="navbar-brand">React</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link to={'/user'} className="nav-link">User</Link></li>
      <li className="nav-item"><Link to={'/product'} className="nav-link">Product</Link></li>
      </ul>
      <hr />
      </div>
      </nav> <br />
      <Switch>
      <Route exact path='/user' component={ User } />
      <Route exact path='/Product' component={ Product } />
      <Route path='/addUser' component={ AddUser } />
      <Route path='/addProduct' component={ AddProduct } />
      </Switch>
      </div>
      </Router>
    )
  }
}

export default Header
