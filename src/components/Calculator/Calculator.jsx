import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  // a,b , phep tinh
  // = => a phep tinh b
  // fnc = (a,b,pheptinh) => if(pheptinh === "+") {return a+b}

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };
  const handleClickEnter = (e) => {
    if (e.key === "Enter") {
      setInput(eval(input));
    }
  };

  const buttonArr = [
    ["C", "<-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const handleClickBtn = (e) => {
    const useHandleClickFncElements = [
      "%",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
    ];

    const value = e.target.value;
    if (useHandleClickFncElements.includes(value)) {
      handleClick(e);
    } else if (value === "C") {
      setInput("");
    } else if (value === "<-") {
      setInput(input.slice(0, -1));
    } else {
      setInput(eval(input));
    }
    console.log(e);
  };

  return (
    <div className="cal">
      <input className="screen-cal" value={input} disabled />
      {buttonArr.map((btns, index) => (
        <div className="buttons-line" key={`btn-line-${index}`}>
          {btns.map((btn) => (
            <button
              className={btn === "=" ? "btn-result" : ""}
              key={btn}
              value={btn}
              onClick={handleClickBtn}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
      {/* <div className="buttons-line">
          <button value="C" onClick={() => setInput("")}>
            C
          </button>
          <button value="-" onClick={() => setInput(input.slice(0, -1))}>
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
          <button className="btn-result" onClick={() => setInput(eval(input))}>
            =
          </button>
        </div> */}
    </div>
  );
};

export default Calculator;
