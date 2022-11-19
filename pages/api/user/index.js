export default async function handler(req, res) {
  const data = getData();
  res.status(200).json(data);
}

export async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/users/2");
  const data = await response.json();
  return data;
}
