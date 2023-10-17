import React, { useEffect, useState } from "react";
import Home from "./pages/home/home";
function App() {
  // const [backendData, setBackendData] = useState([{}]);
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
