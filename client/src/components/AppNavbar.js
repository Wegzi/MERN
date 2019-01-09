import React, { Component } from 'react';

class AppNavbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Sobre">Sobre</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default AppNavbar;
