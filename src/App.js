import LoginForm from "./Components/LoginForm/LoginForm";
import Navbar from "./Navbar";
import Home from "./pages/Home"
import Paths from "./pages/Paths"
import Records from "./pages/Records"
import Roles from "./pages/Roles"
import Type from "./pages/Type"
import Users from "./pages/Users"
import {Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
   <Navbar /> 
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/Roles" element= {<Roles />} />
        <Route path= "/Paths" element= {<Paths />} />
        <Route path= "/Type" element= {<Type />} />
        <Route path= "/Records" element= {<Records />} />
        <Route path= "/Users" element= {<Users />} />    
      </Routes>
    </div>
  );
}

export default App;
