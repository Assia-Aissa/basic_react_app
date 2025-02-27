import React from "react";
import { Table } from "reactstrap";

const StudentList = ({ students }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Document</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{student.pk}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.document}</td>
              <td>{student.phone}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No students yet</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default StudentList;
