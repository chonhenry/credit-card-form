import React, { Component } from "react";
import "./FormContainer.css";
import CreditCardForm from "../CreditCardForm/CreditCardForm";

class FormContainer extends Component {
  state = { type: "", cvv: null, creditCardNum: null, year: null };
  componentDidMount() {
    console.log("FormContainer mounted");
  }

  onCvvChange = (e) => {
    if (e.target.value.length <= 3) {
      this.setState({ cvv: e.target.value }, () => console.log(this.state.cvv));
    } else {
      e.target.value = this.state.cvv;
    }
  };

  onCreditCardNumChange = (e) => {
    // if (e.target.value.length > 16) {
    //   e.target.value = e.target.value.slice(0, 16);
    // }

    // if (e.target.value.length <= 16) {
    if (e.target.value.slice(-1) !== "2") {
      this.setState({ creditCardNum: e.target.value }, () =>
        console.log(this.state.creditCardNum)
      );
    } else {
      // e.target.value = this.state.creditCardNum;
      // console.log(this.state.creditCardNum);
      e.target.value = this.state.creditCardNum;
    }
  };

  onYearChange = (e) => {
    if (e.target.value.length <= 4) {
      this.setState({ year: e.target.value }, () =>
        console.log(this.state.year)
      );
    } else {
      e.target.value = this.state.year;
      console.log(this.state.year);
    }
  };

  render() {
    return (
      <div className="FormContainer">
        <CreditCardForm
          onCvvChange={this.onCvvChange}
          onCreditCardNumChange={this.onCreditCardNumChange}
          onYearChange={this.onYearChange}
        ></CreditCardForm>
      </div>
    );
  }
}

export default FormContainer;
