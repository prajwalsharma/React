import React, { Component } from "react";

class Form extends Component {
  // Define State in constructor
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  // Change state based on username input change
  usernameChangeHandler = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log(this.state.username);
      }
    );
  };

  // Change state based on comments input change
  commentsChangeHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  // Change state based on topic input change
  topicChangeHandler = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      () => {
        console.log(`${this.state.topic} is selected!`);
      }
    );
  };

  // Submit the form
  formSubmitHandler = (event) => {
    alert(
      `Username: ${this.state.username}, Comment: ${this.state.comments}, Topic: ${this.state.topic}`
    );
    event.preventDefault();
  };

  // UI Code
  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onSubmit={this.formSubmitHandler}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={this.usernameChangeHandler}
            required
          />
        </div>
        <div>
          <label>Comments: </label>
          <textarea
            value={comments}
            onChange={this.commentsChangeHandler}
            required
          ></textarea>
        </div>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={this.topicChangeHandler} required>
            <option value="">Select</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
