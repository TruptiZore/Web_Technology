import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/add">Add Student</Link>
    </div>
  );
}

export default Navbar;