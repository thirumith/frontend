import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8080/employees")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-3">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Employee_id</th>
            <th scope="col">Designation</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, employee_id) => (
              <tr key={employee_id}>
                <td>{item.name}</td>
                <td>{item.employee_id}</td>
                <td>{item.designation}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link
        type="button"
        to="/create"
        className="btn btn-secondary"
        style={{ float: "right" }}
      >
        AddEmployee
      </Link>
    </div>
  );
};

export default Dashboard;
