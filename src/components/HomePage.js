import { Component } from "react";
import homeImage from "../assets/homepage.jpg";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>WELCOME</h1>
        <img className="home-page-img" src={homeImage} alt="homepage" />
      </div>
    );
  }
}
