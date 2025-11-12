import "./App.css";

//import images
import rocketLogo from "./assets/rocket-logo.png";

//import useState
import { useState } from "react";

function App() {
  //créer les states
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switchReset, setSwitchReset] = useState(false);

  return (
    <>
      <header>
        <img src={rocketLogo} alt="rocket" />
        <h1>Ready To Go</h1>
      </header>
      <main>
        <section>
          <div className="on-off">
            <button
              onClick={() => {
                setSwitch1(true);
              }}
            >
              {switch1 ? (
                <p className="switchOnClicked">ON</p>
              ) : (
                <p className="switchOnNotClicked">ON</p>
              )}
            </button>
            <button
              onClick={() => {
                setSwitch1(false);
              }}
            >
              {switch1 ? (
                <p className="switchOnNotClicked">OFF</p>
              ) : (
                <p className="switchOnClicked">OFF</p>
              )}
            </button>
          </div>
          <div className="on-off">
            <button
              onClick={() => {
                setSwitch2(true);
              }}
            >
              {switch2 ? (
                <p className="switchOnClicked">ON</p>
              ) : (
                <p className="switchOnNotClicked">ON</p>
              )}
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
            >
              {switch2 ? (
                <p className="switchOnNotClicked">OFF</p>
              ) : (
                <p className="switchOnClicked">OFF</p>
              )}
            </button>
          </div>
          <div className="on-off">
            <button
              onClick={() => {
                setSwitch3(true);
              }}
            >
              {switch3 ? (
                <p className="switchOnClicked">ON</p>
              ) : (
                <p className="switchOnNotClicked">ON</p>
              )}
            </button>
            <button
              onClick={() => {
                setSwitch3(false);
              }}
            >
              {switch3 ? (
                <p className="switchOnNotClicked">OFF</p>
              ) : (
                <p className="switchOnClicked">OFF</p>
              )}
            </button>
            {/* {console.log(switch1)}
            {console.log(switch2)}
            {console.log(switch3)} */}
          </div>
        </section>
        <section>
          {
            // 🔺 JE DOIS METTRE UNE CONDITION}
          }
          {switch1 && switch2 && switch3 ? (
            <p className="go-go-go">Go !</p>
          ) : (
            <p className="no-way">No Way !</p>
          )}
        </section>
        {/* <section>
          <button
            className="reset"
            onClick={() => {
              setSwitchReset(true);
            }}
          >
            {switchReset
              ? switch1 === false && switch2 === false && switch3 === false
              : null}
            RESET
          </button>
        </section> */}
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Elodiiiie</span> 🐸
        </p>
      </footer>
    </>
  );
}

export default App;
