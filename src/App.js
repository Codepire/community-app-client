import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app">
            <Route index element={<p>hello </p>} />
          </Route>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
