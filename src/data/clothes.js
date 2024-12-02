export async function getAllClothes() {
  const response = await fetch("/data.json");

  if (response.status === 500) {
    return { error: "Server error" };
  }

  const data = await response.json();

  return data.clothes;
}
