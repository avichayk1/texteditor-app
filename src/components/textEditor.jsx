import React, { Component } from 'react';
import Keyboard from './Keyboard';

class TextEditor extends Component {
  render() {
    const { value, handleKeyPress, language, size, font, color, camelCase } =
      this.props;

    return (
      <div>
        <div>
          <h3>Text Editor</h3>
          <textarea
            defaultValue={value}
            style={{ fontSize: `${size}` }}
          />
        </div>

        <Keyboard
          handleKeyPress={handleKeyPress}
          language={language}
          size={size}
          font={font}
          color={color}
          camelCase={camelCase}
        />
      </div>
    );
  }
}

export default TextEditor;
