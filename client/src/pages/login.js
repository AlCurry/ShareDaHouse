import React from "react";
import TextDisplay from "../components/TextDisplay";
import Input from "../components/Input/Input";
import FileInput from "../components/Input/FileInput";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="page">
        <div className="signin">
          <Input
            onChange={e => this.handleInputChange(e)}
            name="username"
            placeholder="Username"
          />
          <Input
            onChange={e => this.handleInputChange(e)}
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <button onClick={() => alert("User:  " + this.state.username)}>
          Alert the User
        </button>
      </div>
    );
  }
}

export default LoginPage;
