import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navBackColor, setNavBackColor] = useState("rgba(0, 0, 0, 0.4)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && navBackColor === "rgba(0, 0, 0, 0.4)") {
        setNavBackColor("rgba(54, 54, 54, 0.4)");
      } else if (
        window.scrollY === 0 &&
        navBackColor !== "rgba(0, 0, 0, 0.4)"
      ) {
        setNavBackColor("rgba(0, 0, 0, 0.4)");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navBackColor]);
  return (
    <>
      <nav className="Navbar">
        <ul className="Navbar__ul" style={{ backgroundColor: navBackColor }}>
          <li className="Navbar__li">Home</li>
          <li className="Navbar__li">About</li>
          <li className="Navbar__li">Contact Us</li>
          <li className="Navbar__li">Support</li>
          <li className="Navbar__li">Blog</li>
        </ul>
      </nav>
    </>
  );
}
