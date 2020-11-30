import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const productsListMock = [
  {
    id: 1,
    name: "Name",
    lastModifyDate: new Date().toLocaleDateString(),
    status: 1,
    priority: 3,
  },
  {
    id: 2,
    name: "Second",
    lastModifyDate: new Date().toLocaleDateString(),
    status: 2,
    priority: 5,
  },
];

localStorage.setItem("productsList", JSON.stringify(productsListMock));

ReactDOM.render(<App />, document.getElementById("root"));
