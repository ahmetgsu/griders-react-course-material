import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  // 1st thing is to set up contextType
  // this is how we hook up context object to related Component
  // contextType name is special for this purpose. DO  NOT USE ANOTHER NAME INSTEAD
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    const text = this.context === "english" ? "Submit" : "VoorLeggen";
    return <button className="ui button primary">{text}</button>;
  }
}

// The same meaning with static, but outside of class
// Button.contextType = LanguageContext;

export default Button;
