import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Button from "./UI/Button";

const NavbarCompt = () => {
  const itemLinks = [
    { path: "/", display: "Home" },
    { path: "/about", display: "About Meetup" },
    { path: "/schedule", display: "Schedule" },
    { path: "/speakers", display: "Speakers" },
    { path: "/sponsors", display: "Sponsors" },
    { path: "/vanue", display: "Vanue" },
    { path: "/blog", display: "Blog" },
  ];

  return (
    <nav className="navbar bg-transparent">
      <Container>
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="ms-auto d-flex">
          {itemLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
        <div className="btn-ticket">
          <Button />
        </div>
      </Container>
    </nav>
  );
};

export default NavbarCompt;
