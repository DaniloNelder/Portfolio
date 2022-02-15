import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import config from "../editable-stuff/config.js";
import * as FaIcons from "react-icons/fa";

const Navigation = React.forwardRef((props, ref) => {
  const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${FirstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {showBlog && (
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          )}

          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#experience"}
          >
            Career
          </Nav.Link>

          <Nav.Link
            className="nav-link lead"
            href="https://docs.google.com/document/d/1vBEH6xzIcDwdo1BPjl2NSWG5Fg9sVCbxo1MYtLTD6kY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href="https://docs.google.com/document/d/1pom_Q7UKB-MRUwrJlf2aRbjKgHk9P54weOXwB1B_9no/edit"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume 🇧🇷
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#aboutme"}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#skills"}
          >
            Skills
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
