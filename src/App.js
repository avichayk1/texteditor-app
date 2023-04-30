import React, { Component } from 'react';
// import NavBar from './components/navbar';
// import './App.css';
import TextEditor from './components/textEditor';
class App extends Component {
  state = {
    text: '',
    language: 'english',
    size: '16px',
    font: 'Arial',
    color: '#000000',
    camelCase: false,
    stuck: [],
  };
  handleChange = (event) => {
    console.log(event.target.value, event.target.id);
    const value = event.target.value;
    const id = event.target.id;
    this.setState({ ...this.state, [id]: value, stuck: { ...this.state } });
  };
  handleKeyClick = (event) => {
    const key = event.target.id;
    const text = this.state.text;
    const camelCase = this.state.camelCase;
    const language = this.state.language;

    if (key === 'Enter') {
      this.setState({
        ...this.state,
        text: text + '\r\n',
        stuck: { ...this.state },
      });
      console.log(text);
    } else if (key === 'Backspace') {
      if (language !== 'emoji') {
        this.setState({
          ...this.state,
          text: text.slice(0, -1),
          stuck: { ...this.state },
        });
      } else {
        this.setState({
          ...this.state,
          text: text.slice(0, -2),
          stuck: { ...this.state },
        });
      }
    } else if (key === 'Tab') {
      this.setState({
        ...this.state,
        text: text + '    ',
        stuck: { ...this.state },
      });
    } else if (key === 'Shift') {
      this.setState({
        ...this.state,
        camelCase: !camelCase,
        stuck: { ...this.state },
      });
    } else if (key === 'Control') {
      this.setState({
        ...this.state,
        language: 'english',
        stuck: { ...this.state },
      });
    } else if (key === 'Clear') {
      this.setState({ ...this.state, text: '', stuck: { ...this.state } });
    } else if (key === 'Undo') {
      this.setState(this.state.stuck);
    } else if (
      camelCase === false ||
      camelCase === 'false' ||
      language !== 'english'
    ) {
      console.log(camelCase);
      this.setState({
        ...this.state,
        text: text + key,
        stuck: { ...this.state },
      });
    } else {
      console.log(camelCase);
      let upper = key.toUpperCase().toString();
      this.setState({
        ...this.state,
        text: text + upper,
        stuck: { ...this.state },
      });
    }
  };
  render() {
    return (
      <div>
        <TextEditor
          value={this.state.text}
          handleKeyPress={this.handleKeyClick}
          handleChange={this.handleChange}
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
