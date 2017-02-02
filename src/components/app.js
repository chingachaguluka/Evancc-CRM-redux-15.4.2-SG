import React, { Component } from 'react';
import ComplaintsIndex from './complaints_index';


export default class App extends Component {

  render() {
    
    return (
      <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Evancc CRM</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Manage Complaints <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Reports</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Chinga <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Change Password</a></li>
                      <li><a href="#">Profile</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="body" className="container">
            {this.props.children}
          </div>
          
      </div>
    );
  }
}
