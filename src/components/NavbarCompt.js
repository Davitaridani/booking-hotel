import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Button from "./UI/Button";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

const NavbarCompt = () => {
  const itemLinks = [
    { path: "/", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/schedule", display: "Schedule" },
    { path: "/speakers", display: "Speakers" },
    { path: "/sponsors", display: "Sponsors" },
    { path: "/vanue", display: "Vanue" },
  ];

  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="navbar bg-transparent">
      <Container>
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="item-nav d-flex align-items-center">
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            {itemLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
          <div className="btn-ticket">
            <Button />
          </div>
        </div>
        <button
          onClick={() => setSidebar(!sidebar)}
          class="navbar-item-menu bg-transparent border-0"
        >
          {sidebar ? <MdClose /> : <CgMenuRight />}
        </button>
      </Container>
    </nav>
  );
};

export default NavbarCompt;
