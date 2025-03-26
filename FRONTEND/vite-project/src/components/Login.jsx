import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="flex justify-center">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Login</legend>

        <label className="fieldset-label">Email</label>
        <input type="email" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label className="fieldset-label">Password</label>
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button className="btn btn-neutral mt-4" onClick={fetchData}>Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
