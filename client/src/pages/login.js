import React from "react";
import TextDisplay from "../components/TextDisplay";
import Input from "../components/Input/Input";
import FileInput from "../components/Input/FileInput";
import Axios from 'axios';

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
  handleLogin(event){
    var apiBaseUrl = "http://localhost:3001";
    var  user = this;
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }


  handleSignup(event){
    var apiBaseUrl= "http://localhost:3001";
    var newUser = this
    var payload ={
      "email": this.state.username,
      "password": this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
  
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
  };
}

export default LoginPage;
