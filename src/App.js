import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Comp/SignIn";
import SignUp from "./Comp/SignUp";
import Create_Store from "./Comp/Create_Store";
import Create_Store_two from "./Comp/Create_Store_two";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={''}>
          <Route path="/SignIn" index element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Create_Store" element={<Create_Store />} />
          <Route path="/Create_Store_two" element={<Create_Store_two />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
