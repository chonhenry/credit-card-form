import React, { Component } from "react";
import "./App.css";
import FormContainer from "./FormContainer/FormContainer";
import CreditCardForm from "./CreditCardForm/CreditCardForm";
import { CreditCard } from "./CreditCard/CreditCard";
import { CreditCardBack } from "./CreditCardBack/CreditCardBack";

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
    type: "",
    side: "front",
  };

  onCvvChange = (e) => {
    if (e.target.value.length <= 3) {
      this.setState({ cvv: e.target.value });
    } else {
      e.target.value = this.state.cvv;
    }
  };

  // onCreditCardNumChange = (e) => {
  //   if (
  //     (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") ||
  //     (e.target.value.slice(-1) === " " &&
  //       this.state.creditCardNum.length !== 0) ||
  //     e.target.value === ""
  //   ) {
  //     this.setState({ creditCardNum: e.target.value.split(" ").join("") });

  //     if (this.state.creditCardNum !== null) {
  //       if (
  //         e.target.value.split(" ").join("").length % 4 === 0 &&
  //         e.target.value.split(" ").join("").length < 16
  //       ) {
  //         if (e.target.value.slice(-1) === " ") {
  //           e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  //         } else {
  //           e.target.value = e.target.value + " ";
  //         }
  //       }
  //     }
  //   } else {
  //     if (e.target.value === "") {
  //       e.target.value = "";
  //     } else {
  //       e.target.value = this.state.creditCardNum;
  //     }
  //   }
  // };

  onCreditCardNumChange = (e) => {
    if (e.target.value.slice(-1) >= "0" && e.target.value.slice(-1) <= "9") {
      this.setState({ creditCardNum: e.target.value });
    } else {
      if (e.target.value === "") {
        e.target.value = "";
        this.setState({ creditCardNum: "", type: "" });
      } else {
        e.target.value = this.state.creditCardNum;
      }
    }

    // check type
    if (e.target.value.slice(0, 1) === "4") {
      this.setState({ type: "visa" });
    } else if (e.target.value.slice(0, 1) === "6") {
      this.setState({ type: "discover" });
    } else if (
      e.target.value.slice(0, 2) === "51" ||
      e.target.value.slice(0, 2) === "52" ||
      e.target.value.slice(0, 2) === "53" ||
      e.target.value.slice(0, 2) === "54" ||
      e.target.value.slice(0, 2) === "55"
    ) {
      this.setState({ type: "master" });
    } else if (
      e.target.value.slice(0, 2) === "34" ||
      e.target.value.slice(0, 2) === "37"
    ) {
      this.setState({ type: "amex" });
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

  onCvvClick = () => {
    this.setState({ side: "back" }, () => {
      console.log(this.state.side);
    });
  };

  onFormClick = () => {
    this.setState({ side: "front" }, () => {
      console.log(this.state.side);
    });
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
          numDigit={this.state.type === "amex" ? 15 : 16}
          onCvvClick={this.state.side === "front" ? this.onCvvClick : null}
          onFormClick={this.state.side === "back" ? this.onFormClick : null}
        ></CreditCardForm>
        <CreditCard
          year={this.state.year}
          month={this.state.month}
          name={this.state.name}
          ccNum={this.state.creditCardNum}
          type={this.state.type}
          side={this.state.side}
        ></CreditCard>
        <CreditCardBack
          type={this.state.type}
          side={this.state.side}
        ></CreditCardBack>
      </div>
    );
  }
}

export default App;
