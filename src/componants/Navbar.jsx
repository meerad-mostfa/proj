import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {


  return (
 <>

<div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link "  to='/' >HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/Categories'>Categories</Link>
          </li>    <li className="nav-item ">
            <Link className="nav-link " to='/Sigin' >Sigin</Link>
          </li>    <li className="nav-item">
            <Link className="nav-link " to='/SignUp' >SignUp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/Products1' >Products</Link>
          </li>

           
           </ul>
           <form className="d-flex" role="search">
        <input className="form-control me-2"  type='text' placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
           </div>
           </div>
  </nav>
</div>


 </>
  )
}

export default Navbar