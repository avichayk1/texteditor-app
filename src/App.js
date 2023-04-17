import React, { Component } from 'react';
// import NavBar from './components/navbar';
import './App.css';
import TextEditor from './components/textEditor';
class App extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <div>
        <TextEditor>
          TextEditor={this.props.text}
          onKeyClick={this.handleKeyClick}
          {/* handleTextChange={this.handleTextChange} */}
        </TextEditor>
      </div>
    );
  }
  // handleTextChange = (event) => {
  //   this.setState({ text: event.target.value });
  // };

  handleKeyClick = (event) => {
    console.log(event.target);
    // if (key === 'backspace') {
    //   this.setState((prevState) => ({
    //     text: prevState.text.slice(0, -1),
    //   }));
    // } else if (key === 'clear') {
    //   this.setState({ text: '' });
    // } else {
    //   this.setState((prevState) => ({
    //     text: prevState.text + key,
    //   }));
    // }
  };
}

export default App;

// export default AP;
// function App() {
//   return (
//   );
// }
//TextEditor}
