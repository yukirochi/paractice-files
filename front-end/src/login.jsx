import { useState } from "react";
function Login() {
  let [name, username] = useState("");
  let [password, setpassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      let data = { name, password };
      if (!name || !password) {
        alert("pls insert your username and password");
        return;
      }
      const res = await fetch("http://localhost:3001/getlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let resp = await res.json();
      alert(resp.msg);
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-screen h-[100%] flex justify-center items-center">
      <div className="w-[clamp(200px,50%,300px)] h-[clamp(400px,30%,450px)] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm shadow-[5px_5px_0px_0_rgba(0,0,0,1)]">
        <form className="w-[100%] h-[100%] text-center cursor-pointer" onSubmit={(e)=> login(e)}>
          <p className="w-[100%] h-[20%] flex justify-center items-center font-semibold text-white text-xl">
            LOGIN
          </p>
          <div className="w-[100%] h-[30%] flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="username"
              className="bg-transparent  border-b-black border-b-[1px] placeholder:text-center placeholder:text-[rgba(255,255,255,0.5)] outline-none text-center"
              onChange={(e)=> username(e.target.value)}
              required
            />
            <p>username</p>
          </div>
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center">
            <input
              type="password"
              placeholder="password"
              className="bg-transparent  border-b-black border-b-[1px] placeholder:text-center placeholder:text-[rgba(255,255,255,0.5)] outline-none text-center"
               onChange={(e)=> setpassword(e.target.value)}
              required
            />
            <p>password</p>
          </div>
          <div className="w-[100%] h-[40%] flex flex-col justify-center items-center gap-3">
            <button className="bg-white w-[40%] h-[20%] rounded-sm font-sans font-semibold">
              Submit
            </button>
            <p className=" hover:underline text-[12px]">forgot password</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
