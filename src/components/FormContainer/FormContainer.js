import React, { Component } from "react";
import "./FormContainer.css";
import CreditCardForm from "../CreditCardForm/CreditCardForm";

class FormContainer extends Component {
  state = { type: "", cvv: null, creditCardNum: null, year: null, day: null };
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
    console.log(e.target.value.slice(-1));

    if (
      (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") ||
      (e.target.value.slice(-1) === " " &&
        this.state.creditCardNum.length !== 0)
    ) {
      this.setState({ creditCardNum: e.target.value.split("  ").join("") });

      if (this.state.creditCardNum !== null) {
        // if (this.state.creditCardNum.toString().length % 4 === 0) {
        if (
          e.target.value.split(" ").join("").length % 4 === 0 &&
          e.target.value.split(" ").join("").length < 16
        ) {
          e.target.value = e.target.value + " ";
          console.log(4);
        }
      }
    } else {
      if (e.target.value === "") {
        e.target.value = "";
      } else {
        e.target.value = this.state.creditCardNum;
      }
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
