import { Outlet } from "react-router-dom";

export default function ClothesLayout() {
  return (
    <>
      {/* Byt ut till header komponent här */}
      <header>
        <h1 className="text-4xl">Header</h1>
      </header>
      <br />
      <Outlet />
    </>
  );
}
