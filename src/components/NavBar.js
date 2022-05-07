import React from "react";
import NavBarButton from "./NavBarButton";
import Link from "react-dom";
import "../App.css";
import { Button } from "react-bootstrap";

class NavBar extends React.Component {
  state = {
    input: "",
  };
 
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/amazeing">
                aMazeing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/nbareference">
                NBA Reference
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/flatgram">
                FlatGram
              </a>
            </li>
          </ul>

          <div class="col-xs-2">
            <input
              class="form-control"
              id="ex1"
              type="text"
              placeholder="Search Website"
              onChange={this.props.searchFunction}
            />
          </div>

          {/* <button
            class="btn btn-outline-success my-2 my-sm-0 float-left"
            onClick={this.props.clickedSearchButton}
            type="submit">
            Search
          </button> */}
        </div>

        <NavBarButton />
      </nav>
    );
  }
}

export default NavBar;
