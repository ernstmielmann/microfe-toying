console.log("hello react!");

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgs: [],
    };
  }
  componentDidMount() {
    document.addEventListener("pass-message", this.addMsg);
  }
  componentWillUnmount() {
    document.removeEventListener("pass-message");
  }
  addMsg = (e) => {
    this.setState({
      msgs: [...this.state.msgs, e.detail],
    });
  };
  render() {
    return (
      <>
        <p>React app</p>
        <ul>
          {this.state.msgs.map((msg) => (
            <li key={msg.id}>
              {msg.msg} {msg.id}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
