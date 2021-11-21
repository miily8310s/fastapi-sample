import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const Hello = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMethod = () => {
      axios.get("http://localhost:8000/").then((response) => {
        const data = response.data;
        setMessage(data.message);
      });
    };
    fetchMethod();
  }, []);
  return <div>{message}</div>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Hello />
        </a>
      </header>
    </div>
  );
}

export default App;
