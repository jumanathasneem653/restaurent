import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Review.css';

export default function AddForm() {
  return (
    <div>
      <Container>
      <h2 style={{ color: "white",textAlign: "center" }}>MAIL US</h2>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicText">
            
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to Terms and Conditions" />
          </Form.Group> */}
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}