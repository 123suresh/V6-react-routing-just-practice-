import React from "react";
import { useState, useEffect } from "react";
import "./API.css";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

const GetUsers = () => {
  const [data, setData] = useState([]);
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        // setUserID(resp[0].userID)
        // setTitle(resp[0].title)
        // setBody(resp[0].body)
        // setUserId(resp[0].id)
      });
    });
  }

  function deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });

    alert("you have delete list");
  }

  function selectUser(id) {
    setUserID(data[id - 1].userID);
    setTitle(data[id - 1].title);
    setBody(data[id - 1].body);
    setUserId(data.id);
  }

  function updateUser() {
    let item = { userID, title, body };
    console.warn("item", item);
    fetch(`http://localhost:3000/users/${userID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  return (
    <>
      <div className="table-demo">
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope="col">EmployeeID</th>
              <th scope="col">Name</th>
              <th scope="col">Skill</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((item, i) => (
              <tr>
                <td>{item.userID}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <MDBBtn
                    onClick={() => deleteUser(item.id)}
                    className="mx-2"
                    color="danger"
                  >
                    Delete
                  </MDBBtn>
                </td>
                <td>
                  <MDBBtn
                    onClick={() => selectUser(item.id)}
                    className="mx-2"
                    color="success"
                  >
                    Update
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
      <div>
        <input
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </>
  );
};

export default GetUsers;
