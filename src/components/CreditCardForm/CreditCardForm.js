import React, { Component } from "react";
import "./CreditCardForm.css";
import CreditCard from "../CreditCard/CreditCard";

class CreditCardForm extends Component {
  render() {
    return (
      <div className="CreditCardForm">
        <div className="ui raised padded text container segment">
          <form className="ui form">
            <div className="field">
              <label>Card Number</label>
              <div className="field">
                <input
                  onChange={this.props.onCreditCardNumChange}
                  type="text"
                  maxLength="19"
                  name="ccNumber"
                />
              </div>
            </div>

            <div className="field">
              <label>Card Holders</label>
              <div className="field">
                <input type="text" name="holderName" />
              </div>
            </div>

            <div className="fields">
              <div className="twelve wide field">
                <label className="">Expiration Date</label>
                <div className="two fields">
                  <div className="field">
                    <select
                      className="ui fluid search dropdown"
                      name="card[expire-month]"
                      onChange={this.props.onMonthChange}
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="field">
                    <input
                      onChange={this.props.onYearChange}
                      type="number"
                      name="card[expire-year]"
                      maxLength="4"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
              <div className="four wide field">
                <label className="">CVV</label>
                <input
                  onChange={this.props.onCvvChange}
                  type="number"
                  name="cvv"
                ></input>
              </div>
            </div>
            <button
              onClick={this.props.onSubmit}
              className="fluid blue ui button"
              tabIndex="0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreditCardForm;
