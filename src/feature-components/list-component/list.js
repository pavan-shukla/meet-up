import React, { useState } from "react";

import { Table, Form } from "react-bootstrap";
import { connect } from "react-redux";

function List(props) {
  const [searchText, setSearchText] = useState('');  
  const [filteredUsers, setFilteredUsers] = useState([]);  
  const cols = {
    name: "Name",
    age: "Age",
    dob: "DOB",
    profession: "Profession",
    locality: "Locality",
    numOfGuests: "Number of Guests",
    address: "Address"
  };

  function onSearch(e) {
    const searchTextlocal = e && e.target && e.target.value;
    setSearchText(() => searchTextlocal || '');
    setFilteredUsers(getFilteredResults(props.users, searchTextlocal));
  }

  function getFilteredResults(users, searchTerm) {
    let usersLocal = [...users];
    usersLocal = usersLocal.filter((value, index) => value['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || value['locality'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return usersLocal;
  }

  return (
    <React.Fragment>
      <h1 className="pd-48">Users</h1>
      <Form className="col-md-3 no-padding">
        <Form.Group>
          <Form.Control type="text" placeholder="Search" value={searchText} onChange={onSearch} />
        </Form.Group>
      </Form>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {Object.values(cols).map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(searchText ? (filteredUsers.length > 0 ): props.users && props.users.length) > 0 ? (
            (searchText ? filteredUsers: props.users).map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {Object.keys(cols).map((col, id) => (
                  <td key={id}>
                    {value[col] instanceof Date
                      ? value[col].toISOString().split("T")[0]
                      : value[col]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={Object.values(cols).length + 1}>No Data found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return { users: state.appReducer.users };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
