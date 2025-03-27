import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      setError("");
      const res = await axios.post(
        "http://localhost:3000/api/user/signup",
        {
          firstName,
          lastName,
          email,
          password,
          gender,
          age,
          avatar,
        },
        { withCredentials: true }
      );
      alert(res.data.message); // Success alert
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Something went wrong");
      } else {
        setError("Network error, please try again");
      }
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center m-10">
      <fieldset className="fieldset w-96 bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="fieldset-label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="FirstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="fieldset-label">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="fieldset-label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="fieldset-label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="fieldset-label">Age</label>
        <input
          type="number"
          className="input"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="fieldset-label">Gender</label>
        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="fieldset-label">Avatar</label>
        <input
          type="text"
          className="input"
          placeholder="Image"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleSignUp}>
          SignUp
        </button>
        <p className="text-red-200">{error}</p>
      </fieldset>
    </div>
  );
};

export default SignUp;
