import React, { Component } from "react";
import axios from "axios";

class GetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map((post) => (
              <>
                <div key={post.id}>{post.title}</div>
                <div key={post.id}>{post.body}</div>
              </>
            ))
          : null}
      </div>
    );
  }
}

export default GetRequest;
