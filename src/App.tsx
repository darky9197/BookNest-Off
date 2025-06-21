import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/Mainpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sellingform from "./pages/Sellingform";


import "./index.scss";



function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/Signin" element={<Login />} />
          <Route path="/Signup" element={<Register />} />
          
        </Routes>
      
    </>
  );
}

export default App;
