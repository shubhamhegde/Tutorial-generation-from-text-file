import React, { useState, useEffect, Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './Navbar.css';


class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

render() {
  //console.log(jwt_decode(localStorage.usertoken).identity.role)
  
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  const loginRegLink=(
    <div>
  <ul className='nav-menu'>
  <li className='nav-item'>
    <Link to='/' className='nav-links' >
      Home
    </Link>
  </li>
  <li className='nav-item'>
    <Link
      to='/login'
      className='nav-links' 
    >
      Log In
    </Link>
  </li>
  <li>
    <Link
      to='/sign-up'
      className='nav-links'>
      Sign Up
    </Link>
  </li>
</ul>
{/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
</div>
)
  const teacherLink=(
    <div>
    <ul className= 'nav-menu'>
    <li className='nav-item'>
      <Link to='/' className='nav-links' >
        Home
      </Link>
    </li>
    <li className='nav-item'>
      <Link
        to='/profile'
        className='nav-links'
      >
        User
      </Link>
    </li>
    <li>
      <Link
        to='/tutorial_gen'
        className='nav-links'
      >
        Tutorial Generation
      </Link>
    </li>
    <li>
    <a href="" onClick={this.logOut.bind(this)} className="nav-links">
            Logout
          </a>
    </li>
  </ul>
  {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
  </div>
  )
  const stuLink=(
    <div>
    <ul className= 'nav-menu'>
    <li className='nav-item'>
      <Link to='/' className='nav-links' >
        Home
      </Link>
    </li>
    <li className='nav-item'>
      <Link
        to='/profile'
        className='nav-links'
      >
        User
      </Link>
    </li>
    <li>
    <a href="" onClick={this.logOut.bind(this)} className="nav-links">
            Logout
          </a>
    </li>
  </ul>
  {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
  </div>
  )
  return (
    <>
      <nav className='navbar'>
        <img className='imgname' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZIEf2Jysct2G9UTHJvTY3aOk6HZdWutuy4A&usqp=CAU" height="60px"/>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >

            Tutorial Generation
          </Link>
          <div className='menu-icon' >
            <i className='fas fa-bars' />
          </div>
          {localStorage.usertoken ? (jwt_decode(localStorage.usertoken).identity.role==="teacher"?teacherLink:stuLink)  : loginRegLink}
        </div>
      </nav>
    </>
  );
}
}

export default withRouter(Navbar);