import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete} from 'react-icons/ai';


const TutorialList = ({tutor}) => {
  console.log(tutor)

  return (
    <div className='mt-5  container'>
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
        <tr>

          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className="text-center">
             <BiEdit style={{ fontSize:"2rem", color:"orange",cursor:"pointer" }}/>
            <AiFillDelete style={{ fontSize:"2rem", color:"red",cursor:"pointer"}}/>
          </td>
        </tr>

      </tbody>
    </Table>
    </div>
  )
}

export default TutorialList
