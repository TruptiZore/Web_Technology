import { useState } from "react";
import "../App.css";

function AddStudent({ students, setStudents }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = { name, age, course };
    setStudents([...students, newStudent]);

    alert("Student Added!");

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;