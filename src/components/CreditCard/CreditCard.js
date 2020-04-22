import React from "react";
import "./CreditCard.scss";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";
import discover from "../../img/discover.png";
import amex from "../../img/amex.png";
import chip from "../../img/chip.png";

export const CreditCard = ({ year, month, name, ccNum, type, side }) => {
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

  let numberSection = null;

  if (ccType === amex) {
    numberSection = (
      <div className="ccNumber">
        <div className="first-group">
          {ccNum.length <= 4
            ? ccNum.slice(0, ccNum.length) + "#".repeat(4 - ccNum.length)
            : ccNum.slice(0, 4)}
        </div>
        <div className="second-group">
          {ccNum.length <= 10 && ccNum.length >= 5
            ? ccNum.slice(4, ccNum.length) + "#".repeat(10 - ccNum.length)
            : ccNum.length <= 4
            ? "######"
            : ccNum.slice(4, 10)}
        </div>
        <div className="third-group">
          {ccNum.length >= 11
            ? ccNum.slice(10, ccNum.length) + "#".repeat(15 - ccNum.length)
            : "#####"}
        </div>
      </div>
    );
  } else {
    numberSection = (
      <div className="ccNumber">
        <div className="first-group">
          {ccNum.length <= 4
            ? ccNum.slice(0, ccNum.length) + "#".repeat(4 - ccNum.length)
            : ccNum.slice(0, 4)}
        </div>
        <div className="second-group">
          {ccNum.length <= 8 && ccNum.length >= 5
            ? ccNum.slice(4, ccNum.length) + "#".repeat(8 - ccNum.length)
            : ccNum.length <= 4
            ? "####"
            : ccNum.slice(4, 8)}
        </div>
        <div className="thirg-group">
          {ccNum.length <= 12 && ccNum.length >= 9
            ? ccNum.slice(8, ccNum.length) + "#".repeat(12 - ccNum.length)
            : ccNum.length <= 8
            ? "####"
            : ccNum.slice(8, 12)}
        </div>
        <div className="fourth-group">
          {ccNum.length >= 13
            ? ccNum.slice(12, ccNum.length) + "#".repeat(16 - ccNum.length)
            : "####"}
        </div>
      </div>
    );
  }

  return (
    <div className={`CreditCard ${side}`}>
      <div className="ui card">
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
        <img className="chip" src={chip}></img>
        {numberSection}
        {/* <div className="ccNumber">
          <div className="first-four">
            {ccNum.length <= 4
              ? ccNum.slice(0, ccNum.length) + "#".repeat(4 - ccNum.length)
              : ccNum.slice(0, 4)}
          </div>
          <div className="first-four">
            {ccNum.length <= 8 && ccNum.length >= 5
              ? ccNum.slice(4, ccNum.length) + "#".repeat(8 - ccNum.length)
              : ccNum.length <= 4
              ? "####"
              : ccNum.slice(4, 8)}
          </div>
          <div className="first-four">
            {ccNum.length <= 12 && ccNum.length >= 9
              ? ccNum.slice(8, ccNum.length) + "#".repeat(12 - ccNum.length)
              : ccNum.length <= 8
              ? "####"
              : ccNum.slice(8, 12)}
          </div>
          <div className="first-four">
            {ccNum.length >= 13
              ? ccNum.slice(12, ccNum.length) + "#".repeat(16 - ccNum.length)
              : "####"}
          </div>
        </div> */}
        <div className="name-date">
          <div className="cardHolder">
            <div className="holderTitle">Card Holder</div>
            <div className="holderName">
              {name.length > 0 ? name : "FULL NAME"}
            </div>
          </div>
          <div className="expirationDate">
            <div className="expirationTitle">Expires</div>
            <div className="date">
              <div className="expirationMonth">
                {month.length === 2 ? month : "MM"}
              </div>
              <div className="slash">/</div>
              <div className="expirationYear">
                {year.length === 4 ? year.slice(2, 4) : "YY"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class CreditCard extends Component {
//   componentDidMount() {
//     console.log("CreditCard mounted");
//   }

//   render() {
//     return (
//       <div className="CreditCard">
//         <div className="ui card">
//           <img className="ccType" src={amex}></img>
//           <img className="chip" src={chip}></img>
//           <div className="ccNumber">
//             <div className="first-four">####</div>
//             <div className="first-four">####</div>
//             <div className="first-four">####</div>
//             <div className="first-four">####</div>
//           </div>
//           <div className="name-date">
//             <div className="cardHolder">
//               <div className="holderTitle">Card Holder</div>
//               <div className="holderName">Full Name</div>
//             </div>
//             <div className="expirationDate">
//               <div className="expirationTitle">Expires</div>
//               <div className="date">
//                 <div className="expirationMonth">MM</div>
//                 <div className="slash">/</div>
//                 <div className="expirationDay">{this.year}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CreditCard;
