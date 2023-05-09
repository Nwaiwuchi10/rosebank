// import { Example } from "./PDF/Example";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Foot from "./Components/Foot";
import Footers from "./Components/Footers";

import Header2 from "./Components/Header2";
import Header3 from "./Components/Header3";

import HomePage from "./HomePage/HomePage";
import LoginScreen from "./Screens/LoginScreen";
import LoginScreen2 from "./Screens/LoginScreen2";
import StudentSignup from "./Screens/StudentSignup";
import ResponsiveDrawer from "./Ui/Drawer";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Header2 />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<StudentSignup />} />
        <Route path="/dashboard" element={<ResponsiveDrawer />} />
      </Routes>
    </div>
  );
}

export default App;
