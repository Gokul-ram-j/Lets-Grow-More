import { useState } from "react";
import "./App.css";
import Draggable from "react-draggable";

const App = () => {
  let [data, update] = useState("");

  return (
    <>
      <div className="bg">
        <video
          src="/zenitsu-thunder-breathing-kimetsu-no-yaiba-moewalls-com.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <Draggable>
        <div className="outercontainer">
          <div className="innercontainer">
            <div className="displaycontainer">
              <div className="maindisplay">
                <h1>{data}</h1>
              </div>
            </div>
            <div className="buttoncontainer">
              <button onClick={() => update(data + "7")} className="button">
                7
              </button>
              <button onClick={() => update(data + "8")} className="button">
                8
              </button>
              <button onClick={() => update(data + "9")} className="button">
                9
              </button>
              <button onClick={() => update(data + "+")} className="button">
                +
              </button>
              <button onClick={() => update(data + "4")} className="button">
                4
              </button>
              <button onClick={() => update(data + "5")} className="button">
                5
              </button>
              <button onClick={() => update(data + "6")} className="button">
                6
              </button>
              <button onClick={() => update(data + "-")} className="button">
                -
              </button>
              <button onClick={() => update(data + "3")} className="button">
                3
              </button>
              <button onClick={() => update(data + "2")} className="button">
                2
              </button>
              <button onClick={() => update(data + "1")} className="button">
                1
              </button>
              <button onClick={() => update(data + "*")} className="button">
                X
              </button>
              <button onClick={() => update(data + "0")} className="button">
                0
              </button>
              <button onClick={() => update("")} className="clear button">
                Clear
              </button>
              <button
                onClick={() =>
                  update(String(parseFloat(eval(data)).toFixed(2)))
                }
                className="button"
              >
                =
              </button>
              <button onClick={() => update(data + "/")} className="button">
                %
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
};

export default App;
