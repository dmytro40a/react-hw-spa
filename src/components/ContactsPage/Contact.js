import React, { Component } from "react";
import maleIcon from "../../assets/male.png";
import femaleIcon from "../../assets/female.png";
import unknownIcon from "../../assets/unknown.png";

class Contact extends Component {
  render() {
    function genderIcon(gender) {
      if (gender === "male") {
        return maleIcon;
      }
      if (gender === "female") {
        return femaleIcon;
      } else return unknownIcon;
    }
    return (
      <div className="contact-card">
        <h2 key={`key is ${this.props}${this.props.gender}`}>
          {this.props.firstName} {this.props.lastName}
        </h2>
        <p>{this.props.phone}</p>
        <img
          className="gender_icon"
          src={genderIcon(this.props.gender)}
          alt={this.props.gender + "-icon"}
        />
      </div>
    );
  }
}

export default Contact;
