import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/Mainpage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./index.scss";
import Sellingform from "./pages/Sellingform";

function App() {
  // const [isLoggedin, setisLoggedin] = useState(true);
  // const [page, setpage] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
        <Route path="/Sell" element={<Sellingform/>}/>
        <Route path="/Signin" element={<Login />} />
        <Route path="/Signup" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
