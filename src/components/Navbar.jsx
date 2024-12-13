import { Navbar, Badge } from "flowbite-react";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";
import { useRecoilState } from "recoil";
import { countState } from "../states/count";

export default function NavigationBar() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Femme Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Femme
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 list-none">
          <Navbar.Link as={NavLink} to="/cart" className="flex">
            <BsCart3 className="mr-2 h-5 w-5" />
            <div className="flex rounded-full justify-center items-center -mt-1.5 -ml-3.5 h-4 w-4 bg-red-600 text-white text-xs">
              {count}
            </div>
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
