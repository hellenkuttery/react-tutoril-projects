import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import axios from "axios";

const TaskList = ({ tasks, getTasks }) => {
  const deleteTasks = async (id) => {
    const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  getTasks();
  // const [isDone,setIsDone]=useState(false)

  // const toggleDone=(id)=>{
  //   console.log(id)
  //   tasks.map((task)=>{
  //     task.id=== id ? setIsDone(true) : setIsDone(false);
  //   })

  // }

  return (
    <div>
      {tasks?.map((t) => {
        const { id, task, date } = t;
        return (
          <div
            key={id}
            // onDoubleClick={()=>{toggleDone(id)}} className={isDone ? "text-decoration-line-through " : "text-white"}
          >
            <div className="d-flex flex-row justify-content-between mt-3 bg-secondary p-2 rounded-4 text-capitalize">
              <div className="d-flex flex-column text-start ">
                <h3>{task} </h3>
                <p>{date}</p>
              </div>

              <RiDeleteBack2Fill
                onClick={() => {
                  deleteTasks(id);
                }}
                style={{
                  color: "black",
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default TaskList;
