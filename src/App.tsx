import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/Mainpage";
import SignupPage from "./pages/Signuppage";

import "./index.scss";

function App() {
  // const [isLoggedin, setisLoggedin] = useState(true);
  // const [page, setpage] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/Login" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
