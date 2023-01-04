import { useState } from "react";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee_id, setId] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesigantion] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { employee_id, name, designation, email, location };
    console.log(empdata);

    fetch("http://localhost:8080/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ textAlign: "center", color: "grey" }}>
                  Update Details
                </h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        required
                        value={employee_id}
                        onChange={(e) => setId(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Designation</label>
                      <input
                        value={designation}
                        onChange={(e) => setDesigantion(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 my-3">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>

                      <Link
                        type="button"
                        to="/"
                        className="btn btn-danger"
                        style={{ float: "right" }}
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
