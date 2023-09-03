import "./auth.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";

import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
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
      const response = await axios({
        url: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      });
      localStorage.setItem("jwtToken", response.data.token);
      toast.success("Logged in!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        toast.error("Unauthorized!");
      }
    } finally {
      setCredentials({
        username: "",
        password: "",
      });
    }
  }

  return (
    <>
      <div className="Auth">
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <Input
            type="text"
            name="username"
            handleChange={handleChange}
            placeholder="Username"
            value={credentials.username}
          />
          <Input
            type="password"
            name="password"
            handleChange={handleChange}
            placeholder="Password"
            value={credentials.password}
          />
          <Button
            buttonClassName="btn btn-large btn-primary-hover"
            buttonText="Continue"
            buttonType="submit"
            styles={{ width: "300px", margin: "7px 0" }}
          />
          <p>
            New user? <Link to="/auth/register">register here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
