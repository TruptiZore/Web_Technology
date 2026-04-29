import "../App.css";

function StudentList({ students }) {
  return (
    <div className="container">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <div className="card-container">
          {students.map((s, index) => (
            <div className="card" key={index}>
              <h3>{s.name}</h3>
              <p>Age : {s.age}</p>
              <p>Course : {s.course}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;