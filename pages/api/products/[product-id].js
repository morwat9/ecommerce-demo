export default async function handler(req, res) {
  const data = await getData();
  res.status(200).json(data);
}

export async function getData(productId) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DATA_URL + "/products/" + productId
  );
  const data = await response.json();
  return data;
}
