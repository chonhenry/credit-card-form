import React from "react";
import "./CreditCardBack.scss";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";
import discover from "../../img/discover.png";
import amex from "../../img/amex.png";

export const CreditCardBack = ({ type }) => {
  let ccType = "";

  if (type === "visa") {
    ccType = visa;
  } else if (type === "discover") {
    ccType = discover;
  } else if (type === "master") {
    ccType = master;
  } else if (type === "amex") {
    ccType = amex;
  }

  return (
    <div className="CreditCardBack">
      <div className="ui card">
        <div className="blackspace"></div>
        <div className="cvv">cvv</div>
        <div className="whitespace"></div>
        {/* <img className="" src={ccType}></img> */}
        <img
          className={`ccType ${
            ccType === visa
              ? "visa"
              : ccType === master
              ? "master"
              : ccType === amex
              ? "amex"
              : ccType === discover
              ? "discover"
              : ""
          }`}
          src={ccType}
        ></img>
      </div>
    </div>
  );
};
