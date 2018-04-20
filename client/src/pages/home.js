import React from "react";
import TextDisplay from "../components/TextDisplay";
import Input from "../components/Input/Input";
import FileInput from "../components/Input/FileInput";

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
        <button
          onClick={() => alert("Description:  " + this.state.description)}>
          Alert the Description
        </button>
      </div>
    );
  }
}

export default HomePage;
