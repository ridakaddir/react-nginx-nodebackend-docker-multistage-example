import { useState, useEffect } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({ message: "HELLO FROM REACT" });

  useEffect(() => {
    (async function () {
      try {
        const response = await Axios.get("/api");
        setData(response.data);
      } catch (error) {
        setData({ message: "HELLO FROM ERROR" });
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.message}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
