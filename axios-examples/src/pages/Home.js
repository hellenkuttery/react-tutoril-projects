import React, { useState, useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const [tutorials, setTutorials] = useState();
  const getTutorials = async () => {
    // data ham veri olduğu için destructure yapmamız gerekiyor
    const { data } = await axios(url);
    
    setTutorials(data)
 
  };

  // Bu şekilde kullandığımız için render state render state olduğu için sonsuz döngüye giriyor. Bu nedenle useEffect kullanıyoruz
  //  getTutorials();
// DidMount 
  useEffect(() => {
    getTutorials();
  }, []);
  return (
    <div>
      <AddTutorial />

      <TutorialList tutor={tutorials}/>
    </div>
  );
};

export default Home;
