import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Student from './Student'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const showMessage = () => {
    alert("Welcome to Student App!");
  };

  // Multiple students data
  const students = [
    { name : "Trupti", age: 21, course: "AIML" },
    { name: "Paras", age: 22, course: "CSE" },
    { name: "Aditi", age: 16, course: "IT" },
    { name: "Tanvi", age: 22, course: "ME" }
  ];

  return (

    <div className="container">

      <h3>Trupti Rajgonda Zore. 24UAM316</h3>
      <h3>Experiment 10 : Output</h3>

      <h1>Student Info</h1>
      <br></br>
      <button onClick={showMessage}>Click Me</button>

      <div className="card-container">
        {students.map((s, index) => (
          <Student 
            key={index}
            name={s.name}
            age={s.age}
            course={s.course}
          />
        ))}
      </div>
    </div>

  );
}

export default App
