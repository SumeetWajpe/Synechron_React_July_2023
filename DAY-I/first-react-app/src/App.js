import React from "react";
import Message from "./components/message/message.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

export default App;
