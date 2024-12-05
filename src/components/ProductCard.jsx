import { Card } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductCard({ garment }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  function navigateToProductViewPage() {
    // check if the location match the a specific route path
    // if match, then navigate to the corresponding page
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
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={garment.image}
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
