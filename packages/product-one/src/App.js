import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "ui-components";
import { formatDate, usePeos } from "common-utils";

function App() {
  const kati = useKati("kati apo to product 1");
  React.useEffect(() => {
    console.log("topiko kati");
  });
  return (
    <div className="App">
      <div>
        Sample product
        <Button label="A product button" />
        <span>Today is: {formatDate(new Date())}</span>
      </div>
    </div>
  );
}

export default App;
