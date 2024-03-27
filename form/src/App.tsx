import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
const App = () => {
  let [name, updatename] = useState("");
  let [email, updateemail] = useState("");
  let [dob, updatedob] = useState("");
  let [gender, updategender] = useState("");
  let [skill, updateskill] = useState("");
  let [url, updateurl] = useState("");
  let data: Object[] = [];
  function handlesubmit(e: any) {
    e.preventDefault();
    data.push({
      name: name,
      email: email,
      dob: dob,
      gender: gender,
      skill: skill,
      url: url,
    });
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <form
          action=""
          onSubmit={handlesubmit}
          onReset={() => {
            updatename("");
            updateemail("");
            updatedob("");
            updateskill("");
            updategender("");
          }}
        >
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control"
              name="sname"
              placeholder="username"
              onChange={(e) => updatename(e.target.value)}
            />
            <label className="floatingInput">username</label>
          </div>
          <div className="form-floating m-2">
            <input
              type="email"
              className="form-control"
              name="sname"
              placeholder="name@gmail.com"
              onChange={(e) => updateemail(e.target.value)}
            />
            <label className="floatingInput">Email</label>
          </div>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="dob" style={{ fontWeight: "bold" }}>
              Date of Birth{" "}
            </label>
            <br />
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={(e) => updatedob(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="dob" style={{ fontWeight: "bold" }}>
              Photo Url
            </label>
            <br />
            <input
              type="url"
              name="url"
              id="url"
              onChange={(e) => updateurl(e.target.value)}
            />
          </div>
          <div>
            <h5
              style={{
                margin: "0%",
                padding: "0%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Gender
            </h5>{" "}
            <div className="gendercontainer">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={(e) => {
                    console.log(
                      e.target.checked ? updategender("male") : updategender("")
                    );
                  }}
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={(e) => {
                    console.log(
                      e.target.checked
                        ? updategender("female")
                        : updategender("")
                    );
                  }}
                />
                Female
              </label>
            </div>
          </div>

          <div style={{ border: "2px solid rgba(54, 53, 53, 0.113)" }}>
            <p
              style={{
                margin: "0%",
                padding: "0%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Programming Languages you know
            </p>
            <div className="skillcontainer">
              <div>
                <input
                  type="checkbox"
                  name="java"
                  id="Java"
                  onChange={(e) =>
                    e.target.checked
                      ? updateskill(skill + e.target.id + " ")
                      : updateskill(skill.replace(e.target.id, ""))
                  }
                />
                <label htmlFor="java">Java</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="javascript"
                  id="Javascript"
                  onChange={(e) =>
                    e.target.checked
                      ? updateskill(skill + e.target.id + " ")
                      : updateskill(skill.replace(e.target.id, ""))
                  }
                />
                <label htmlFor="Javascript">Javascript</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="python"
                  id="Python"
                  onChange={(e) =>
                    e.target.checked
                      ? updateskill(skill + e.target.id + " ")
                      : updateskill(skill.replace(e.target.id, ""))
                  }
                />
                <label htmlFor="python">Python</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="c++"
                  id="C++"
                  onChange={(e) =>
                    e.target.checked
                      ? updateskill(skill + e.target.id + " ")
                      : updateskill(skill.replace(e.target.id, ""))
                  }
                />
                <label htmlFor="c++">C++</label>
              </div>
            </div>
          </div>
          <div className="btngrp">
            <button className="btn btn-success" type="submit">
              Enroll
            </button>
            <button className="btn btn-danger" type="reset">
              Clear
            </button>
          </div>
        </form>
        <div className="display">
          <img
            src={
              url
                ? url
                : "https://4kwallpapers.com/images/walls/thumbs_3t/15227.png"
            }
            alt=""
          />
          <div className="infocontainer">
            <table>
              <tbody>
                <tr>
                  <td>name :</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>email :</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>DOB :</td>
                  <td>{dob}</td>
                </tr>
                <tr>
                  <td>Gender :</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Skills :</td>
                  <td>{skill}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="student-record">
        <img
          src="https://pngtree.com/freebackground/chalk-school-education-learning-student-teacher-classroom-blackboard-math-background_1342352.html"
          alt=""
        />
      </div>
    </>
  );
};

export default App;
