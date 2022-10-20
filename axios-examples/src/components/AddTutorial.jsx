import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor={title,description}
    addTutorial(newTutor)
    setTitle("");
    setDescription("");
  };

 const addTutorial=async(newTutor)=>{
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  try {
    await axios.post(url,newTutor)
  } catch (error) {
    
  }
 }

  return (
    <div className="text-center">
      <h1 className="display-6 text-danger ">ADD YOUR TUTORIAL</h1>
      <Form onSubmit={handleSubmit} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter a description"
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTutorial;
