import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };
  const handleClickEnter = (e) => {
    if (e.key === "Enter") {
      setInput(eval(input));
    }
  };

  return (
    <div>
      <div className="cal">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="screen-cal"
          value={input}
        />
        <div className="buttons-line">
          <button value="C" onClick={(e) => setInput("")}>
            C
          </button>
          <button value="-" onClick={(e) => setInput(input.slice(0, -1))}>
            -
          </button>
          <button value="%" onClick={handleClick}>
            %
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="buttons-line">
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            X
          </button>
        </div>
        <div className="buttons-line">
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="buttons-line">
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="buttons-line">
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button className="btn-result" onClick={(e) => setInput(eval(input))}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
