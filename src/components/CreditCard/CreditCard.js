import React, { Component } from "react";
import "./CreditCard.scss";
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
          <img className="ccType" src={amex}></img>
          <img className="chip" src={chip}></img>
          <div className="ccNumber">
            <div className="first-four">####</div>
            <div className="first-four">####</div>
            <div className="first-four">####</div>
            <div className="first-four">####</div>
          </div>
          <div className="name-date">
            <div className="cardHolder">
              <div className="holderTitle">Card Holder</div>
              <div className="holderName">Full Name</div>
            </div>
            <div className="expirationDate">
              <div className="expirationTitle">Expires</div>
              <div className="date">
                <div className="expirationMonth">MM</div>
                <div className="slash">/</div>
                <div className="expirationDay">DD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
