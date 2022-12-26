import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Nav />
      </div>
    );
  }
}
