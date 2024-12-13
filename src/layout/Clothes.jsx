import { Outlet } from "react-router-dom";
import { getAllClothes } from "../data/clothes";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { useEffect } from "react";

export default function ClothesLayout() {
  const [clothes, setClothes] = useRecoilState(clothesState);

  useEffect(() => {
    getAllClothes().then(setClothes);
  }, []);

  return (
    <>
      <header>
        <h1 className="text-4xl">Clothes Page</h1>
      </header>
      <br />
      <Outlet />
    </>
  );
}
