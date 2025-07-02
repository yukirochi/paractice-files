import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <header className="w-screen h-[8%] flex justify-between items-center font-sans font-semibold text-white ">
        <NavLink to={"/"} className="ml-[5%] text-2xl">
          HOME
        </NavLink>
        <div className="mr-[5%] w-[15%] flex justify-between">
          <NavLink
            to={"/login"}
            className={({isActive}) =>
              isActive ? "border-b-[3px] border-b-black" : "border-b-[3px] border-transparent"
            }
          >
            LOGIN
          </NavLink>
          <NavLink
            to={"/signup"}
            className={({isActive}) =>
              isActive ? "border-b-[3px] border-b-black" : "border-b-[3px] border-transparent"
            }
          >
            SIGNUP
          </NavLink>
        </div>
      </header>
      <div className="h-[92%] w-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
