import React, { Component } from "react";
import "./App.css";
import FormContainer from "./FormContainer/FormContainer";
import CreditCardForm from "./CreditCardForm/CreditCardForm";
import { CreditCard } from "./CreditCard/CreditCard";

class App extends Component {
  state = { type: "", cvv: null, creditCardNum: null, year: null, month: null };
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
    if (
      (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") ||
      (e.target.value.slice(-1) === " " &&
        this.state.creditCardNum.length !== 0)
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
      this.setState({ year: e.target.value }, () =>
        console.log(this.state.year)
      );
    } else {
      e.target.value = this.state.year;
    }
  };

  onMonthChange = (e) => {
    this.setState({ month: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <CreditCardForm
          onCvvChange={this.onCvvChange}
          onCreditCardNumChange={this.onCreditCardNumChange}
          onYearChange={this.onYearChange}
          onMonthChange={this.onMonthChange}
        ></CreditCardForm>
        <CreditCard
          year={this.state.year}
          month={this.state.month}
        ></CreditCard>
      </div>
    );
  }
}

export default App;
