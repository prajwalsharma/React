import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  // Call API when the component loads
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/postss")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: "Error while fetching the data",
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;

    return (
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        {posts.length > 0
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : null}
      </div>
    );
  }
}

export default PostList;
