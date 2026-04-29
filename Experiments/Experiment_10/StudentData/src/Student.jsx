function Student(props) {
  return (

    <div className="card">
      <h2>Name : {props.name}</h2>
      <p>Age : {props.age}</p>
      <p>Course : {props.course}</p>
    </div>

  );
}

export default Student;