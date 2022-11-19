export async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/products");
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const data = await getData();
  res.status(200).json(data);
}
