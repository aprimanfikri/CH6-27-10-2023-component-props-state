import { useState } from "react";
import "./Calculator.css";

function Calculator({ onChangeProps, userInput }) {
  return (
    <form id="user-input">
      <div>
        <label>Initial Investment</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          onChange={(e) => onChangeProps("initialInvestment", e.target.value)}
        />
      </div>
      <div>
        <label>Annual Investment</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          onChange={(e) => onChangeProps("annualInvestment", e.target.value)}
        />
      </div>
      <div>
        <label>Expected Return</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
        />
      </div>
      <div>
        <label>Duration</label>
        <input
          type="number"
          value={userInput.duration}
          onChange={(e) => onChangeProps("duration", e.target.value)}
        />
      </div>
    </form>
  );
}

export default Calculator;
