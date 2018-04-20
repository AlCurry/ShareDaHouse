import React from "react";
import TextDisplay from "../components/TextDisplay";
import Input from "../components/Input/Input";
import FileInput from "../components/Input/FileInput";
import axios from "axios";

class HomePage extends React.Component {
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
  handleHousePost = () => {
    alert(this.state.address + "  " + this.state.address2);
    axios
      .post("/save", { firstName: "Marlon", lastName: "Bernardes" })
      .then(function(response) {
        console.log("saved successfully");
      });
  };

  render() {
    return (
      <div className="page">
        <div className="address">
          <TextDisplay tinyTitle="Address">
            <Input
              onChange={e => this.handleInputChange(e)}
              name="address"
              placeholder="Address 1 (required)"
            />
            <Input
              onChange={e => this.handleInputChange(e)}
              name="address2"
              placeholder="Address 2"
            />
          </TextDisplay>
          <TextDisplay tinyTitle="Information">
            <Input
              onChange={e => this.handleInputChange(e)}
              name="description"
              placeholder="Description"
            />
            <FileInput>Photograph: </FileInput>
          </TextDisplay>
        </div>
        <button onClick={() => this.handleHousePost()}>Post</button>
      </div>
    );
  }
}

export default HomePage;
