import "./auth.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
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
      console.log(response);
    } catch (err) {
      console.log("err");
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
