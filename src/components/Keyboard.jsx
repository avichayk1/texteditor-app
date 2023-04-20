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
        row1 = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊'];
        row2 = ['😋', '😎', '😍', '😘', '😗', '😙', '😚', '😇', '🙂', '🙃'];
        row3 = ['🤔', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥'];
        break;
      default:
        break;
    }
    return (
      <div>
        {language === 'emoji' ? (
          <>
            <div key="row1">
              {row1.map((char, index) => (
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
              {row2.map((char, index) => (
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
              {row3.map((char, index) => (
                <button
                  key={char}
                  onClick={handleKeyPress}
                  id={char}
                >
                  {char}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
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
                id="language"
                value={language}
                onChange={handleChange}
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="hebrew">Hebrew</option>
                <option value="emoji">emoji</option>
              </select>

              <select
                id="font"
                value={font}
                onChange={handleChange}
                defaultValue="Arial"
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Georgia">Georgia</option>
                <option value="Garamond">Garamond</option>
                <option value="Courier New">Courier New</option>
                <option value="Brush Script MT">Brush Script MT</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
              <select
                id="size"
                value={size}
                onChange={handleChange}
                defaultValue="16px"
              >
                <option value="12px">12</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
                <option value="26px">26</option>
                <option value="32px">32</option>
                <option value="64px">64</option>
              </select>

              <select
                id="color"
                value={color}
                defaultValue="#FFFFFF"
                onChange={handleChange}
              >
                <option value="#000000">Black</option>
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
              </select>

              <select
                id="camelCase"
                value={camelCase}
                defaultValue="false"
                onChange={handleChange}
              >
                {/* <option value="none">Normal</option> */}
                <option value="true">Uppercase</option>
                <option value="false">Lowercase</option>
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
