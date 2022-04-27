import { useState, useEffect} from "react";
import './App.css';

import {getAllStudents} from "./client";

function App() {
  const  [students, setStudents] = useState([]);

  const fetchStudents = () =>
      getAllStudents()
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setStudents(data)
          })

  useEffect(() => {
      console.log("component is mounted");
      fetchStudents();
  }, []);

  return <p>{students.length}</p>;
}

export default App;
