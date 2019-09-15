import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  // Getting data by using "CONSUMER"
  // When using Consumer, we dont need to contextType

  renderSubmit = language => {
    return language === "english" ? "Submit" : "Voorleggen";
  };

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    console.log(this.context);

    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// The same meaning with static, but outside of class
// Button.contextType = LanguageContext;

export default Button;

// this.context type of getting data from Context Object
// class Button extends Component {
//     // 1st thing is to set up contextType
//     // this is how we hook up context object to related Component
//     // contextType name is special for this purpose. DO  NOT USE ANOTHER NAME INSTEAD
//     static contextType = LanguageContext;

//     render() {
//       console.log(this.context);
//       const text = this.context === "english" ? "Submit" : "VoorLeggen";
//       return <button className="ui button primary">{text}</button>;
//     }
//   }

//   // The same meaning with static, but outside of class
//   // Button.contextType = LanguageContext;

//   export default Button;
