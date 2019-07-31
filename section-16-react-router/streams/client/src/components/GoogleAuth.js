import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "516170007015-ckvhihn3ejm23kbj8gpo9r2o28bqe0sn.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Gooogle Auth</div>;
  }
}

export default GoogleAuth;
