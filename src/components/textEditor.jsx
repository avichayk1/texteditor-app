import React, { Component } from 'react';
import Keyboard from './Keyboard';

class TextEditor extends Component {
  render() {
    // const { text } = this.state;

    return (
      <div>
        <input
          type="text"
          value={this.props.text}
        />
        <Keyboard
          // key="Keyboard"
          // onChange={this.props.handleTextChange}
          onKeyClick={this.props.onKeyClick}
        />
      </div>
    );
  }
}

export default TextEditor;
