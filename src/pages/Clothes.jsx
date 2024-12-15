import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";

import ProductCard from "../components/ProductCard";

export default function ClothesPage() {
  const [clothes, setClothes] = useRecoilState(clothesState);

  function createProductCard(garment) {
    return <ProductCard key={garment.id} garment={garment} />;
  }

  return (
    <>
      <header>
        <h1 className="text-4xl text-center">Clothes Page</h1>
      </header>

      <section className="flex flex-wrap gap-2.5 justify-center">
        {clothes.map((garment) => createProductCard(garment))}
      </section>
    </>
  );
}
