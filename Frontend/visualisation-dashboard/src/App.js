import React, { useEffect, useState } from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
