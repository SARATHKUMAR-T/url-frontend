import "./App.css";
import Login from "./Componenets/Forms/Login";
import {Routes,Route} from "react-router-dom"
import Home from "./Componenets/Home";
import Signup from "./Componenets/Forms/Signup";
import ForgetPassword from "./Componenets/Forms/ForgetPassword";

function App() {
  return (
    <div className="App text-nunito scroll-smooth dark:bg-gray-900 ">
     <Routes>
   <Route  exact path="/" element={<Login/>}/>
   <Route   path="/home" element={<Home/>}/>
   <Route   path="/signup" element={<Signup/>}/>
   <Route   path="/forgot" element={<ForgetPassword/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
