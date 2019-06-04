import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../dashboard/style.css';
class Landing extends Component {
  render() {
    return (
      <div className="maincontent" >
       
              <Link to="/register" className="btn btn-large">Register </Link>
              <Link to="/login" className="btn btn-large">Log In</Link>
          
          </div>
    );
  }
}

export default Landing;
