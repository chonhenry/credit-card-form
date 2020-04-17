import React, { Component } from "react";
import "./FormContainer.css";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import CreditCard from "../CreditCard/CreditCard";

class FormContainer extends Component {
  render() {
    return (
      <div className="FormContainer">
        <CreditCardForm></CreditCardForm>
      </div>
    );
  }
}

export default FormContainer;
