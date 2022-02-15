import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";

function POSTMethod() {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function saveUser() {
    if (userID != "" && title != "" && body != "") {
      console.log(userID, title, body);
      let data = { userID, title, body };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        console.warn("result", result);
      });
    } else {
      alert("enter valid data");
    }
  }

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <div>
        <h3>POST API Examples</h3>
        <div className="POSTMethod__one">
          <MDBInput
            label="Employee ID"
            id="form1"
            type="number"
            value={userID}
            onChange={(e) => {
              setUserID(e.target.value);
            }}
            name="userID"
          />
        </div>
        <div className="POSTMethod__one">
          <MDBInput
            label="Employee Name"
            id="form1"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="title"
          />
        </div>
        <div className="POSTMethod__one">
          <MDBInput
            label="Skill"
            id="form1"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            name="body"
          />
        </div>
        <div className="POSTMethod__one"></div>
      </div>

      <MDBBtn onClick={toggleShow}>SUBMIT</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Click on (Add Employee) to add Employee</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={saveUser}>Add Employee</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default POSTMethod;
