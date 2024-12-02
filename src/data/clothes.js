export async function getAllClothes() {
  const response = await fetch("http://localhost:5000/clothes");

  if (response.status === 500) {
    return { error: "Server error" };
  }

  const data = await response.json();

  return data.clothes;
}
