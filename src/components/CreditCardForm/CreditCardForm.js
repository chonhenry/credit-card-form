import React, { Component } from "react";
import "./CreditCardForm.css";
import CreditCard from "../CreditCard/CreditCard";

class CreditCardForm extends Component {
  render() {
    return (
      <div className="CreditCardForm">
        <CreditCard></CreditCard>
        <div className="ui raised padded text container segment">
          <form className="ui form">
            <div className="field">
              <label>Card Number</label>
              <div class="field">
                <input type="text" name="ccNumber" />
              </div>
            </div>

            <div className="field">
              <label>Card Holders</label>
              <div class="field">
                <input type="text" name="holderName" />
              </div>
            </div>

            <div className="fields">
              <div className="twelve wide field">
                <label className="">Expiration Date</label>
                <div className="two fields">
                  <div className="field">
                    <select
                      class="ui fluid search dropdown"
                      name="card[expire-month]"
                    >
                      <option value="" disabled selected>
                        Month
                      </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="card[expire-year]"
                      maxlength="4"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
              <div className="four wide field">
                <label className="">CVV</label>
                <input type="number" name="cvv"></input>
              </div>
            </div>
            <button className="fluid blue ui button" tabindex="0">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreditCardForm;
