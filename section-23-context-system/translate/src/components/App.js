import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    console.log(language);
    this.setState({ language: language });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="green">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
