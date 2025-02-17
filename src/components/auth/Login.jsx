import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setemail('')
    setpassword('')
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-10 rounded-xl">
        <form onSubmit={(e) => formHandler(e)} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
  
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-4 text-white outline-none bg-transparent text-xl placeholder:text-gray-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
          onChange={(e)=>{
            setpassword(e.target.value)

        }}
          value={password}
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-4 text-white outline-none bg-transparent text-xl placeholder:text-gray-500"
            type="password"
            placeholder="Enter Password"
          />
          <button className="bg-emerald-600 rounded-full px-3 py-2 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
