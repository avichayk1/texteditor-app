import React, { Component } from 'react';
// import NavBar from './components/navbar';
import './App.css';
import TextEditor from './components/textEditor';
class App extends Component {
  state = {
    text: '',
    language: 'english',
    size: 'medium',
    font: 'Arial',
    color: 'black',
    camelCase: false,
  };
  handleOptionClick = (event) => {
    const key = event.target.id;
    const text = this.state.text;
    const camelCase = this.state.camelCase;
    const language = this.state.language;
    if (event.target.value === '16px') {
      this.setState({ text: text });
    }
  };
  handleKeyClick = (event) => {
    const key = event.target.id;
    const text = this.state.text;
    const camelCase = this.state.camelCase;
    const language = this.state.language;

    if (key === 'Enter') {
      this.setState({ text: text + '\n' });
    } else if (key === 'Backspace') {
      this.setState({ text: text.slice(0, -1) });
    } else if (key === 'Tab') {
      this.setState({ text: text + '    ' });
    } else if (key === 'Shift') {
      this.setState({ camelCase: !camelCase });
    } else if (key === 'Control') {
      this.setState({ language: 'english' });
    } else if (key === 'Clear') {
      this.setState({ text: '' });
    } else if (language === 'english') {
      this.setState({ text: text + key });
    }
  };

  render() {
    return (
      <div>
        <TextEditor
          value={this.state.text}
          handleKeyPress={this.handleKeyClick}
          language={this.state.language}
          size={this.state.size}
          font={this.state.font}
          color={this.state.color}
          camelCase={this.state.camelCase}
        />
      </div>
    );
  }
}

export default App;

// export default AP;
// function App() {
//   return (
//   );
// }
//TextEditor}
