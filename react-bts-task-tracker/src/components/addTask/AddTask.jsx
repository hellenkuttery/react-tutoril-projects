import React,{useState,useEffect} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios"

const AddTask = ({getTasks}) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

const handleSubmit=(e)=>{
  e.preventDefault();
  const newTask={task,date}
  addTasks(newTask);
  console.log("text:",task)
  console.log("day",date)
 
}

const addTasks=async(newTask)=>{
  const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task/";
  try {
    await axios.post(url,newTask)
  } catch (error) {
    
  }
 }

 getTasks();
  return (
    <div className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            className="form-control col-md-6"
            onChange={(e)=>setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column "
          controlId="formBasicPassword"
        >
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Password"
            className="form-control col-md-6"
            onChange={(e)=>setDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="secondary btn-lg  w-50" type="submit">SAVE</Button>
      </Form>
    </div>
  );
};

export default AddTask;