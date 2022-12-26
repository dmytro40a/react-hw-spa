import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li>
          <NavLink exact className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/photos">
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    );
  }
}
