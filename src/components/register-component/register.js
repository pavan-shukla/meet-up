import React, { useState } from "react";
import { Form, Button, Col, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./register.module.css";
import TnC from "./../tnc-component/tnc";

import * as userActions from "../../actions/userActions";

function Register(props) {
  const [isPopupVisible, setPopupVisiblity] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
    dob: "",
    profession: "",
    locality: "",
    numOfGuests: "",
    address: "",
    acceptTnC: false,
  });

  function onSubmit() {
    if (user.name && user.age && user.profession && user.acceptTnC === "true") {
      props.addUsers(user);
    } else {
      console.log("show error");
    }
  }

  function onChangeListener(field, value) {
    const userLocal = { ...user };
    userLocal[field] = value.target.value;
    setUser(userLocal);
  }

  return (
    <div>
      <h1 className="pd-48">Register</h1>
      <Form>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            value={user.name}
            onChange={(e) => onChangeListener("name", e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => onChangeListener("age", e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProfession">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            as="select"
            value={user.profession}
            onChange={(e) => onChangeListener("profession", e)}
          >
            <option>Student</option>
            <option>Employed</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLocality">
          <Form.Label>Locality</Form.Label>
          <Form.Control
            value={user.locality}
            onChange={(e) => onChangeListener("locality", e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGuests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number of guests"
            value={user.numOfGuests}
            onChange={(e) => onChangeListener("numOfGuests", e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={user.address}
            onChange={(e) => onChangeListener("address", e)}
          />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            value={user.acceptTnC}
            onChange={(e) => onChangeListener("acceptTnC", e)}
            label={
              <span>
                I accept{" "}
                <span
                  className={style.tnc}
                  onClick={() => setPopupVisiblity(true)}
                >
                  T&C
                </span>
              </span>
            }
          />
        </Form.Group>

        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
      <Modal
        show={isPopupVisible}
        onHide={() => setPopupVisiblity(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TnC />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setPopupVisiblity(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// Map the state of Store to Props of Component
function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  };
}

// Mapp the actions to Props of Component
function mapDispatchToProps(dispatch) {
  return {
    addUsers: (data) => dispatch(userActions.addUsers(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
