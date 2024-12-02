import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { getAllClothes } from "../data/clothes";

import ProductCard from "../components/ProductCard";

export default function ClothesPage() {
  const [clothes, setClothes] = useRecoilState(clothesState);

  useEffect(() => {
    getAllClothes().then(setClothes);
  }, []);

  function createProductCard(garment) {
    return <ProductCard garment={garment} />;
  }

  return (
    <>
      <h1>Clothes Page</h1>

      {/* för varje produkt, skapa en ProductCard */}
      <section>{clothes.map((garment) => createProductCard(garment))}</section>
    </>
  );
}
