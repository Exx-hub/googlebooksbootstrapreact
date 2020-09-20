import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { GoBook } from "react-icons/go";

function Header() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-center"
        style={{ height: "70px" }}
      >
        <Navbar.Brand className="d-flex align-items-center">
          <GoBook size={30} />{" "}
          <span className="ml-3 h3 font-weight-normal">Book Archive</span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
