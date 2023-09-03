import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAuthCheck() {
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: "/users/me",
      method: "get",
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/app");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}
