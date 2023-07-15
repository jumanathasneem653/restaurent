import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Review.css';

export default function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      review: review,
    };

    // Send the form data to the backend (replace 'backendURL' with your actual backend endpoint)
    fetch('backendURL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend if needed
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Container>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={event => setName(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Review</Form.Label>
            <Form.Control type="text" placeholder="Enter review" value={review} onChange={event => setReview(event.target.value)} />
          </Form.Group>

          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
