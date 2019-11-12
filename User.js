import React from 'react'
import axios from 'axios'
import CardUser from './CardUser'
import {Link } from 'react-router-dom'

class User extends React.Component{
  constructor(){
    super()
    this.state = {
      user : []
    }
  }

  async componentDidMount(){
    await axios.get("http://localhost/reactapi/user.php")
    .then(response=>this.setState({
        user: response.data
      }))
      console.log(this.state)
  }

  render(){
    const renderData = this.state.user.map(user=>{
    return(
        <CardUser user={user} key={user.id}/>
    )
  })
  return(
    <div>
    <h5>Data User</h5>
    <table className='table'>
    <thead className='thead-dark'>
    <tr>
    <th scope='col'>Id</th>
    <th scope='col'>Nama</th>
    <th scope='col'>Alamat</th>
    </tr>
    </thead>
    <tbody>
    {renderData}
    </tbody>
    </table>
      <Link className="btn btn-dark" to={'/addUser'}>Tambah User</Link>
    </div>
  )
}
}

export default User
