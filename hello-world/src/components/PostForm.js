import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  userIdChangeHandler = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };

  titleChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  bodyChangeHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
    const data = {
      userId: this.state.userId,
      title: this.state.title,
      body: this.state.body,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
        alert("Data Posted Successfully!");
      });

    event.preventDefault();
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label>User Id: </label>
            <input
              name="userId"
              onChange={this.userIdChangeHandler}
              value={userId}
            />
          </div>
          <div>
            <label>Title: </label>
            <input
              name="title"
              onChange={this.titleChangeHandler}
              value={title}
            />
          </div>
          <div>
            <label>Body: </label>
            <input name="body" onChange={this.bodyChangeHandler} value={body} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
