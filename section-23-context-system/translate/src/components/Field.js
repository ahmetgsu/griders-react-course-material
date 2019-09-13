import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  // 1st thing is to set up contextType
  // this is how we hook up context object to related Component
  // contextType name is special for this purpose. DO  NOT USE ANOTHER NAME INSTEAD
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
