import React, { Component } from "react";
import "./App.css";
import FormContainer from "./FormContainer/FormContainer";
import CreditCardForm from "./CreditCardForm/CreditCardForm";
import { CreditCard } from "./CreditCard/CreditCard";

// ae 34, 37
// mc 51, 52, 53, 54, 55
// visa 4
// dis 6

class App extends Component {
  state = {
    type: "",
    cvv: "",
    creditCardNum: "",
    year: "",
    month: "",
    name: "",
    creditCardCompany: "",
  };

  onCvvChange = (e) => {
    if (e.target.value.length <= 3) {
      this.setState({ cvv: e.target.value });
    } else {
      e.target.value = this.state.cvv;
    }
  };

  onCreditCardNumChange = (e) => {
    if (
      (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") ||
      (e.target.value.slice(-1) === " " &&
        this.state.creditCardNum.length !== 0) ||
      e.target.value === ""
    ) {
      this.setState({ creditCardNum: e.target.value.split(" ").join("") });

      if (this.state.creditCardNum !== null) {
        if (
          e.target.value.split(" ").join("").length % 4 === 0 &&
          e.target.value.split(" ").join("").length < 16
        ) {
          if (e.target.value.slice(-1) === " ") {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
          } else {
            e.target.value = e.target.value + " ";
          }
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
      this.setState({ year: e.target.value });
    } else {
      e.target.value = this.state.year;
    }
  };

  onMonthChange = (e) => {
    this.setState({ month: e.target.value });
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <CreditCardForm
          onCvvChange={this.onCvvChange}
          onCreditCardNumChange={this.onCreditCardNumChange}
          onYearChange={this.onYearChange}
          onMonthChange={this.onMonthChange}
          onNameChange={this.onNameChange}
        ></CreditCardForm>
        <CreditCard
          year={this.state.year}
          month={this.state.month}
          name={this.state.name}
          ccNum={this.state.creditCardNum}
          ccCompnay={this.state.creditCardCompany}
        ></CreditCard>
      </div>
    );
  }
}

export default App;
