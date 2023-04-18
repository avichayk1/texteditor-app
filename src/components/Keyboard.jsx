import React, { Component } from 'react';

class Keyboard extends Component {
  render() {
    const {
      handleKeyPress,
      handleChange,
      language,
      size,
      font,
      color,
      camelCase,
    } = this.props;

    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';
    let row4 = 'Clear Backspace Enter Tab Shift Control';

    switch (language) {
      case 'hebrew':
        row1 = 'שקראטופ';
        row2 = 'םוטכחנ';
        row3 = 'זסבהדג';
        break;
      case 'emoji':
        row1 = '😀😁😂🤣😃😄😅😆😉😊';
        row2 = '😋😎😍😘😗😙😚😇🙂🙃';
        row3 = '🤔🤨😐😑😶😏😒🙄😬🤥';
        break;
      default:
        break;
    }
    return (
      // keyboard.push(
      <div>
        <div key="row1">
          {row1.split('').map((char, index) => (
            <button
              key={char}
              onClick={handleKeyPress}
              id={char}
            >
              {char}
            </button>
          ))}
        </div>
        <div key="row2">
          {row2.split('').map((char) => (
            <button
              key={char}
              onClick={handleKeyPress}
              id={char}
            >
              {char}
            </button>
          ))}
        </div>
        <div key="row3">
          {row3.split('').map((char) => (
            <button
              key={char}
              onClick={handleKeyPress}
              id={char}
            >
              {char}
            </button>
          ))}
        </div>
        <div key="row4">
          {row4.split(' ').map((char) => (
            <button
              key={char}
              onClick={handleKeyPress}
              id={char}
            >
              {char}
            </button>
          ))}
        </div>
        <div key="row5">
          {
            <div>
              <select
                value={language}
                onChange={handleChange}
              >
                <option value="english">English</option>
                <option value="hebrew">Hebrew</option>
                <option value="emoji">emoji</option>
              </select>

              <select
                value={font}
                onChange={handleChange}
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>

              <select
                //value={size}
                onChange={handleChange}
              >
                <option value="12px">12</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
              </select>

              <select
                value={color}
                onChange={this.props.onColorChange}
              >
                <option value="#000000">Black</option>
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
              </select>

              <select
                value={camelCase}
                onChange={this.props.onCaseChange}
              >
                <option value="none">Normal</option>
                <option value="uppercase">Uppercase</option>
                <option value="lowercase">Lowercase</option>
              </select>
            </div>
          }
        </div>
        <hr />
      </div>
    );
  }
}
export default Keyboard;
