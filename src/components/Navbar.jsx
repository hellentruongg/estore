import { Navbar } from "flowbite-react";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src="/logo-1.png" className="mr-3 h-6 sm:h-9" alt="Femme Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Femme
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 list-none">
          <Navbar.Link as={NavLink} to="/cart" className="flex">
            <BsCart3 className="mr-2 h-5 w-5" />
            Cart
          </Navbar.Link>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link as={NavLink} to="/">
            Home
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/clothes">
            Clothes
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/shoes">
            Shoes
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/accessories">
            Accessories
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
