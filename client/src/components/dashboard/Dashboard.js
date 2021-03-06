import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Create from "./components/createComp";
import Edit from "./components/editComp";
import Index from "./components/indexComp";
class Dashboard extends PureComponent {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              CRUD
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">
                    Posts
                  </Link>
                </li>
                <li className="nav-item" onClick={this.onLogoutClick}>
                  <Link to="/register" className="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id/:title/:text" component={Edit} />
            <Route path="/" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
