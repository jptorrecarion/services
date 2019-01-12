import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () =>{
    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <section id='brand'>
              <Link to = '/' className="navbar-brand"  ><small>JOHN</small> <span className = 'text-danger'><small>PAUL</small></span></Link>
              </section>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to = '/' className="nav-link" >Home </Link>
                  </li>
                  <li className="nav-item">
                    <Link to = '/service' className="nav-link" >Service</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ='/about' className="nav-link " >About</Link>
                  </li>
                </ul>
               
              </div>
            </nav>
            
        </div>
    )
}
export default navbar