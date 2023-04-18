import React, { Component } from 'react';
import Keyboard from './Keyboard';

class TextEditor extends Component {
  render() {
    const {
      value,
      handleKeyPress,
      handleChange,
      language,
      size,
      font,
      color,
      camelCase,
    } = this.props;

    return (
      <div>
        <div>
          <h3>Text Editor</h3>
          {
            <span
              defaultValue={value}
              style={{ backgroundColor: `${color}`, fontSize: `${size}` }}
            >
              {value}
            </span>
          }
        </div>

        <Keyboard
          handleKeyPress={handleKeyPress}
          handleChange={handleChange}
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
