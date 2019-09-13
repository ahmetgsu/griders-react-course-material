import React, { Component } from "react";
import UserCreate from "./UserCreate";

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
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
