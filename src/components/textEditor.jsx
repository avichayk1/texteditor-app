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
      <div
        id="container"
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <h1
          style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Text Editor
        </h1>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            defaultValue={value}
            style={{
              margin: '50px 0 20px 0',
              color: `${color}`,
              fontFamily: `${font}`,
              fontSize: `${size}`,
              whiteSpace: 'pre',
              maxHeight: '300px',
              overflowY: 'scroll',
            }}
          >
            {value}
          </span>
        </div>

        <Keyboard
          style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            width: '100%',
            height: '50px',
          }}
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
