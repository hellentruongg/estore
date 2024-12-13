import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { getAllClothes } from "../data/clothes";

import ProductCard from "../components/ProductCard";

export default function ClothesPage() {
  const [clothes, setClothes] = useRecoilState(clothesState);

  function createProductCard(garment) {
    return <ProductCard key={garment.id} garment={garment} />;
  }

  return (
    <>
      <section>{clothes.map((garment) => createProductCard(garment))}</section>
    </>
  );
}
