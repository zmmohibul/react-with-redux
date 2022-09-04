import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

root.render(<App />);
