import React, { Component } from "react";
import "./CreditCard.scss";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";
import discover from "../../img/discover.png";
import amex from "../../img/amex.png";
import chip from "../../img/chip.png";

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

export const CreditCard = (props) => {
  let year = "YY";

  if (props.year !== null) {
    if (props.year.length == 4) {
      year = props.year.slice(2, 4);
    }
  }

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
              <div className="expirationDay">{year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default CreditCard;
