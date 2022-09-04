import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
}

root.render(<App />);
