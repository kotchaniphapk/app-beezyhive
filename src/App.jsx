import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { API_URL } from "./config/defines";

function App() {
  const test = async () => {
    const url = `${API_URL}/users/1`;
    const method = "GET";
    const headers = new Headers({
      Accept: "application/json",
    });
    const response = await fetch(url, { method, headers });
    if (!response.ok) {
      throw new Error(data?.message || "An error occurred");
    }

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <button onClick={test}>Click me</button>
    </div>
  );
}

export default App;
