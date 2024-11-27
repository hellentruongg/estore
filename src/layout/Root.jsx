import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>Navigation bar</h1>
      <Outlet />
    </>
  );
}
