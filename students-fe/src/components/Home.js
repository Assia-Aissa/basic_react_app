import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

class Home extends Component {
  state = {
    students: []
  };

  addOrUpdateStudent = (student) => {
    this.setState((prevState) => {
      const students = [...prevState.students];
      const index = students.findIndex((s) => s.pk === student.pk);

      if (index >= 0) {
        // Modifier un étudiant existant
        students[index] = student;
      } else {
        // Ajouter un nouvel étudiant avec un ID unique simulé
        student.pk = students.length + 1;
        students.push(student);
      }

      return { students };
    });
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList students={this.state.students} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} onSubmit={this.addOrUpdateStudent} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
