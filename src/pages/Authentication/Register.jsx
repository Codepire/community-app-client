import "./auth.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => {
      return { ...prevCredentials, [name]: value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios({
        url: "/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        },
      });
      toast.success("Registered!");
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (err) {
      console.log(err);
      if (err.response.status === 409) {
        toast.error("User already exist with this username!");
      } else if (err.response.status === 422) {
        toast.error("Password length must be larger than 8");
      }
    } finally {
      setCredentials({
        username: "",
        email: "",
        password: "",
      });
    }
  }

  return (
    <div className="Auth">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          handleChange={handleChange}
          value={credentials.username}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          handleChange={handleChange}
          value={credentials.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          value={credentials.password}
        />
        <Button
          buttonText="Continue"
          buttonType="submit"
          buttonClassName="btn btn-large btn-primary-hover"
          styles={{ width: "300px", margin: "7px 0" }}
        />
      </form>
    </div>
  );
}
