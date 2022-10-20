import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TutorialList = ({ tutor,getTutorials }) => {
  console.log(tutor);

  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  getTutorials();

  return (
    <div className="mt-5  container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((t) => {
            const { id, title, description } = t;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <BiEdit
                    style={{
                      fontSize: "2rem",
                      color: "orange",
                      cursor: "pointer",
                    }}
                  />
                  <AiFillDelete
                    onClick={() => {
                      deleteTutorial(id);
                    }}
                    style={{
                      fontSize: "2rem",
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TutorialList;
