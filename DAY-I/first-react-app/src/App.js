import React from "react";
import Message from "./components/message/message.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message
          msg="Hey"
          from="John"
          to="Joe"
          imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png"
        />
        <Message
          msg="Hi"
          from="Jim"
          to="Joe"
          imageUrl="https://www.shutterstock.com/shutterstock/photos/1482836018/display_1500/stock-vector-hi-banner-speech-bubble-poster-and-sticker-concept-geometric-memphis-style-with-text-hi-icon-1482836018.jpg"
        />
        <Message
          msg="Hola"
          from="Joe"
          to="John"
          imageUrl="https://img.freepik.com/premium-vector/hola-hi-phrase-lettering-isolated-white-colourful-text-effect-design-vector-text-inscriptions-english-modern-creative-design-has-red-orange-yellow-colors_7280-7768.jpg?w=2000"
        />

        {/* <Message />
        <Message />
        <Message />
        <Message /> */}
      </div>
    );
  }
}

export default App;
