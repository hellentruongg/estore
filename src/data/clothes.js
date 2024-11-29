export async function getAllClothes() {
  const response = await fetch("http://localhost:5000/clothes");

  const data = await response.json();

  return data.products;
}
