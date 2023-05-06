import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link  className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link a className="nav-link" to ="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link a className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        {/* <htmlForm className="htmlForm-inline my-2 my-lg-0">
          <input
            className="htmlForm-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </htmlForm> */}




      </div>



  
<div className="custom-control custom-switch" style = {{color:`${props.mode === 'light'?'black':'white'}`}}>
  <input type="checkbox"  onClick={props.toggleMode} className="custom-control-input" id="customSwitches"/>
  <label className="custom-control-label" htmlFor="customSwitches">Enable {props.mode === 'light'?'Dark':'Light'} Mode</label>
</div>




    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Default Title",
  aboutText: "Default About",
};
