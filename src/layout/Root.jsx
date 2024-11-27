import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
