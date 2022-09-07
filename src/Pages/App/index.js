import "./style.css";
import Homepages from "../Homepages/index.js";
import LogIn from "../LogIn/index.js";
import Register from "../Register/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../Components/Homepage";
import Aboutpage from "../../Components/Aboutpage";
import Contactpage from "../../Components/Contactpage";
import ProtectedRoute from "../ProtectedRoute/index.js";
import LogOut from "../LogOut/index.js";
function App() {
  return (
    <>

      <BrowserRouter>
      <LogOut/>
        <Homepages />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <Aboutpage />
              </ProtectedRoute>
            }
          />
          
          <Route path="contact" element={<Contactpage />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="register" element={<Register />} />

          <Route path="*" element={<p>Error 404</p>} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
export default App;
