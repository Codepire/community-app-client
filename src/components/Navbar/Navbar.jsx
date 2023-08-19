import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [navBackColor, setNavBackColor] = useState("rgba(0, 0, 0, 0.4)");
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 0 && navBackColor === "rgba(0, 0, 0, 0.4)") 
      {
        setNavBackColor("rgba(54, 54, 54, 0.4)");
      } 
      else if ( window.scrollY === 0 && navBackColor !== "rgba(0, 0, 0, 0.4)") 
      {
        setNavBackColor("rgba(0, 0, 0, 0.4)");
      }

    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    }

    setIsMobile(window.innerWidth <= 900);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

  }, [navBackColor]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Step 2
  };

  return (
    <>
      {isMobile ?
        <nav className="Mobile-Navbar" style={menuOpen ? {backdropFilter: "blur(3px)"} : {}}>
          <div className={menuOpen ? "Mobile-Header Mobile-Header-Open" : "Mobile-Header"}>
            <div className="Mobile-Hamburger-Icon" onClick={toggleMenu}>
              ☰
            </div>
          </div>
            <div className={menuOpen ? "Mobile-Menu Mobile-Menu-Open" : "Mobile-Menu"}>
              <ul className="Mobile-Navbar-List">
                <li className="Mobile-Navbar-Item">Home</li>
                <li className="Mobile-Navbar-Item">About</li>
                <li className="Mobile-Navbar-Item">Contact Us</li>
                <li className="Mobile-Navbar-Item">Support</li>
                <li className="Mobile-Navbar-Item">Blog</li>
              </ul>
            </div>
        </nav>
        :
        <nav className="Navbar">
          <ul className="Navbar__ul" style={{ backgroundColor: navBackColor }}>
            <li className="Navbar__li">Home</li>
            <li className="Navbar__li">About</li>
            <li className="Navbar__li">Contact Us</li>
            <li className="Navbar__li">Support</li>
            <li className="Navbar__li">Blog</li>
          </ul>
        </nav>
      }
    </>
  );
}
