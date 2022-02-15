import React, { Component } from "react";
import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID, title, body } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="insideForm">
            <MDBInput
              label="userID"
              type="text"
              name="userID"
              value={userID}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="insideForm">
            <MDBInput
              label="title"
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="insideForm">
            <MDBInput
              label="body"
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <MDBBtn className="mx-2" color="success" type="submit">
            submit
          </MDBBtn>
        </form>
      </>
    );
  }
}

export default PostForm;
