import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
const AddTutorial = () => {
  return (
    <div className="text-center">
      <h1 className="display-6 text-danger ">ADD YOUR TUTORIAL</h1>
      <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddTutorial;
