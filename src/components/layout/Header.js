import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Switch, StaticRouter } from 'react-router-dom';
import ProductList from '../ProductList';
class Header extends Component {

  render (){
    return (
      <Router>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                          <a class="navbar-brand" href="/">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                          <a class="navbar-brand" href="/product-list">Product management<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                          <a class="navbar-brand" href="/user-list">Users management <span class="sr-only">(current)</span></a>
                      </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </nav>
      </Router>
    );
  }
}
 


export default Header;