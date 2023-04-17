import React from 'react';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      size: 'medium',
      font: 'Arial',
      color: 'black',
      case: 'lower',
    };
  }
  render() {
    // const keyboard = {};
    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';
    switch (this.state.language) {
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
              onClick={this.props.onKeyClick}
              //   () =>
              //   this.setState((prevState) => ({ text: prevState.text + char }))
              // }
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
              onClick={this.props.onKeyClick}
              // onClick={() =>
              //   this.setState((prevState) => ({ text: prevState.text + char }))
              // }
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
              // onClick={() =>
              //   this.setState((prevState) => ({ text: prevState.text + char }))
              // }
              onClick={this.props.onKeyClick}
              id={char}
            >
              {char}
            </button>
          ))}
        </div>
        <div>
          {/* <button onClick={this.props.onClear}>Clear</button>
          <button onClick={this.props.onDeleteLast}>Beckspace</button>
          <button onClick={this.props.onUndo}>Undo</button> */}
          <hr />

          {/* <select
            value={this.props.language}
            onChange={this.props.onLanguageChange}
          >
            <option value="en">English</option>
            <option value="he">Hebrew</option>
            <option value="em">emoji</option>
          </select>

          <select
            value={this.props.font}
            onChange={this.props.onFontChange}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>

          <select
            value={this.props.fontSize}
            onChange={this.props.onFontSizeChange}
          >
            <option value="12px">12</option>
            <option value="16px">16</option>
            <option value="20px">20</option>
          </select>

          <select
            value={this.props.color}
            onChange={this.props.onColorChange}
          >
            <option value="#000000">Black</option>
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
          </select>

          <select
            value={this.props.case}
            onChange={this.props.onCaseChange}
          >
            <option value="none">Normal</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
          </select>

          <button onClick={this.props.onGeneralChange}>General Change</button> */}
        </div>
      </div>
    );
    // keyboard.push(
    //   <div key="row2">
    //     {row2.split('').map((char) => (
    //       <button
    //         key={char}
    //         onClick={() =>
    //           this.setState((prevState) => ({ text: prevState.text + char }))
    //         }
    //         id={char}
    //       >
    //         {char}
    //       </button>
    //     ))}
    //   </div>
    // );
    // keyboard.push(
    //   <div key="row3">
    //     {row3.split('').map((char) => (
    //       <button
    //         key={char}
    //         onClick={() =>
    //           this.setState((prevState) => ({ text: prevState.text + char }))
    //         }
    //         id={char}
    //       >
    //         {char}
    //       </button>
    //     ))}
    //   </div>
    // );
    // keyboard.push(
    //   <div>
    //     <button onClick={this.props.onClear}>Clear</button>
    //     <button onClick={this.props.onDeleteLast}>Beckspace</button>
    //     <button onClick={this.props.onUndo}>Undo</button>
    //     <hr />

    //     <select
    //       value={this.props.language}
    //       onChange={this.props.onLanguageChange}
    //     >
    //       <option value="en">English</option>
    //       <option value="he">Hebrew</option>
    //       <option value="em">emoji</option>
    //     </select>

    //     <select
    //       value={this.props.font}
    //       onChange={this.props.onFontChange}
    //     >
    //       <option value="Arial">Arial</option>
    //       <option value="Times New Roman">Times New Roman</option>
    //     </select>

    //     <select
    //       value={this.props.fontSize}
    //       onChange={this.props.onFontSizeChange}
    //     >
    //       <option value="12px">12</option>
    //       <option value="16px">16</option>
    //       <option value="20px">20</option>
    //     </select>

    //     <select
    //       value={this.props.color}
    //       onChange={this.props.onColorChange}
    //     >
    //       <option value="#000000">Black</option>
    //       <option value="#ff0000">Red</option>
    //       <option value="#00ff00">Green</option>
    //     </select>

    //     <select
    //       value={this.props.case}
    //       onChange={this.props.onCaseChange}
    //     >
    //       <option value="none">Normal</option>
    //       <option value="uppercase">Uppercase</option>
    //       <option value="lowercase">Lowercase</option>
    //     </select>

    //     <button onClick={this.props.onGeneralChange}>General Change</button>
    //   </div>
    // );
    // return keyboard;
  }
  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handleFontChange = (event) => {
    this.setState({ font: event.target.value });
  };

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleCaseChange = (event) => {
    this.setState({ case: event.target.value });
  };

  handleGeneralChange = () => {
    // Code to apply general changes to entire text
  };

  handleDeleteLastChar = () => {
    // Code to delete last character
  };

  handleClearAll = () => {
    // Code to clear all text
  };

  handleUndo = () => {
    // Code to undo last action
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      return; // Ignore Enter key
    }
    let char = event.key;
    switch (this.state.language) {
      case 'hebrew':
        char = this.convertToHebrew(char);
        break;
      case 'emoji':
        char = this.convertToEmoji(char);
        break;
      default:
        break;
    }
    if (this.state.case === 'upper') {
      char = char.toUpperCase();
    }
    this.setState((prevState) => ({ text: prevState.text + char }));
  };

  convertToHebrew = (char) => {
    // Code to convert to Hebrew character
  };

  convertToEmoji = (char) => {
    // Code to convert to Emoji character
  };

  renderKeyboard = () => {};
}
export default Keyboard;
//     constructor(props) {
//     super(props);
//     this.state = {
//       language: "english",
//       text: "",
//       isCapsLockOn: false,
//       selectedRange: { start: 0, end: 0 }
//     };

//     return (
//       <div>
//         <button onClick={this.props.onClear}>Clear</button>
//         <button onClick={this.props.onDeleteLast}>Delete Last</button>
//         <button onClick={this.props.onUndo}>Undo</button>

//         <hr />

//         <select
//           value={this.props.language}
//           onChange={this.props.onLanguageChange}
//         >
//           <option value="en">English</option>
//           <option value="he">Hebrew</option>
//           <option value="em">emoji</option>
//         </select>

//         <select
//           value={this.props.font}
//           onChange={this.props.onFontChange}
//         >
//           <option value="Arial">Arial</option>
//           <option value="Times New Roman">Times New Roman</option>
//         </select>

//         <select
//           value={this.props.fontSize}
//           onChange={this.props.onFontSizeChange}
//         >
//           <option value="12px">12</option>
//           <option value="16px">16</option>
//           <option value="20px">20</option>
//         </select>

//         <select
//           value={this.props.color}
//           onChange={this.props.onColorChange}
//         >
//           <option value="#000000">Black</option>
//           <option value="#ff0000">Red</option>
//           <option value="#00ff00">Green</option>
//         </select>

//         <select
//           value={this.props.case}
//           onChange={this.props.onCaseChange}
//         >
//           <option value="none">Normal</option>
//           <option value="uppercase">Uppercase</option>
//           <option value="lowercase">Lowercase</option>
//         </select>

//         <button onClick={this.props.onGeneralChange}>General Change</button>
//       </div>
//     );
//   }
// }

// export default Keyboard;
