import { NavLink } from "react-router-dom";

function Signup() {
    return ( 
       <div className="w-screen h-[100%] flex justify-center items-center">
      <div className="w-[clamp(200px,50%,300px)] h-[clamp(400px,30%,450px)] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm shadow-[5px_5px_0px_0_rgba(0,0,0,1)]">
        <form className="w-[100%] h-[100%] text-center cursor-pointer">
          <p className="w-[100%] h-[20%] flex justify-center items-center font-semibold text-white text-xl">SIGNUP</p>
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center mt-3">
            <input type="text" placeholder="username" className="bg-transparent  border-b-black border-b-[1px] placeholder:text-center placeholder:text-[rgba(255,255,255,0.5)] outline-none text-center"  required/>
            <p>username</p>
          </div>
          <div className="w-[100%] h-[20%] flex flex-col justify-center items-center">
            <input type="email" placeholder="email" className="bg-transparent  border-b-black border-b-[1px] placeholder:text-center placeholder:text-[rgba(255,255,255,0.5)] outline-none text-center" required />
            <p>email</p>
          </div>
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center">
            <input type="password" placeholder="password" className="bg-transparent  border-b-black border-b-[1px] placeholder:text-center placeholder:text-[rgba(255,255,255,0.5)] outline-none text-center" required />
            <p>password</p>
          </div>
          <div className="w-[100%] h-[40%] flex flex-col justify-center items-center gap-3">
            <button className="bg-white w-[40%] h-[20%] rounded-sm font-sans font-semibold">Submit</button>
            <NavLink to="/login" className=" hover:underline text-[12px]">I have an Account</NavLink>
          </div>
        </form>
      </div>
    </div>
     );
}

export default Signup;