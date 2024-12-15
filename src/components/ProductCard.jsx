import { Card } from "flowbite-react";
import { DiVim } from "react-icons/di";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductCard({ garment }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  function navigateToProductViewPage() {
    if (pathname === "/clothes") {
      navigate("/clothes/" + garment.id);
      // } else if (pathname === "/shoes") {
      //   navigate("/clothes/" + shoe.id);
      // } else if (pathname === "/accessories") {
      //   navigate("/clothes/" + accessories.id);
    }
  }

  return (
    <>
      <Card
        onClick={navigateToProductViewPage}
        className="max-w-xs overflow-hidden"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        // imgSrc={garment.image}
        renderImage={() => (
          <img
            className="w-full h-96"
            src={garment.image}
            alt="product image"
          />
        )}
      >
        <h5 className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">
          {garment.title}
        </h5>
        <p className="text-xl font-bold text-gray-900 dark:text-white">
          €{garment.price}
        </p>
      </Card>
    </>
  );
}
