import "./auth.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";

import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
    } catch (err) {
      console.log("err");
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
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
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
        </form>
      </div>
    </>
  );
}
