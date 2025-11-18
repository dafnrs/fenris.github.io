import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import Headroom from "headroom.js";
import { NavbarBrand, Navbar, Container } from "reactstrap";

const Navigation = () => {
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
