import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";

// Projedeki URL : const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
// className="mt-4 d-flex flex-column justify-content-center "

const Home = () => {
  const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task";
  const [tasks, setTasks] = useState();
  const [isButton, setIsButton] = useState(false);
  const [text, setText] = useState("Show Task Bar");

  const toggler = (e) => {
    setIsButton(!isButton);
    let buttonText = isButton ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  // --- CRUD- READ----
  const getTasks = async () => {
    // data ham veri olduğu için destructure yapmamız gerekiyor
    const { data } = await axios(url);
    setTasks(data);
  };

  // Bu şekilde kullandığımız için render state render state olduğu için sonsuz döngüye giriyor. Bu nedenle useEffect kullanıyoruz
  //  getTasks();
  // DidMount
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Button variant="danger" size="lg" onClick={(e) => toggler()}>
        {text}
      </Button>
      {isButton && <AddTask getTasks={getTasks} />}
      <TaskList tasks={tasks} getTasks={getTasks} />
    </div>
  );
};

export default Home;
