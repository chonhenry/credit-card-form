import React, { Component } from "react";
import "./FormContainer.css";
import CreditCardForm from "../CreditCardForm/CreditCardForm";

class FormContainer extends Component {
  render() {
    return (
      <div className="FormContainer">
        {/* <CreditCardForm
          onCvvChange={this.onCvvChange}
          onCreditCardNumChange={this.onCreditCardNumChange}
          onYearChange={this.onYearChange}
          year={this.state.year}
        ></CreditCardForm> */}
        <CreditCardForm></CreditCardForm>
      </div>
    );
  }
}

export default FormContainer;
