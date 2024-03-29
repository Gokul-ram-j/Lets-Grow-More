import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  let [userdata, setdata] = useState([]);

  let fetchdata = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let data = await response.json();
    setdata(data.data);
    console.log(userdata);
  };

  const Usercard = (props) => {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="usercard">
            <img src={props.url} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{props.uname}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{props.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="intro">
        <img
          src="https://i.pinimg.com/564x/8f/b2/33/8fb2335d458a81c3a5760167e5ceb060.jpg"
          alt=""
        />
        <button className=" btn btn-success databtn" onClick={fetchdata}>
          Get Users
        </button>
      </div>
      <div className="container">
        <div className="row">
          {userdata.map((info) => {
            return (
              <Usercard
                key={info.id}
                uname={info.first_name + " " + info.last_name}
                email={info.email}
                url={info.avatar}
              ></Usercard>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default App;
