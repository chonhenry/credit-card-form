import React, { Component } from "react";
import "./CreditCard.css";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";
import discover from "../../img/discover.png";
import amex from "../../img/amex.png";
import chip from "../../img/chip.png";

class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard">
        <div className="ui card">
          <img className="ccType" src={discover}></img>
          <img className="chip" src={chip}></img>
        </div>
      </div>
    );
  }
}

export default CreditCard;
