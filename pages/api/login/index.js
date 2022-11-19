export default async function handler(req, res) {
  const data = await getData();
  res.status(200).json(data);
}

export async function getData(login) {
  try {
    const auth = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.username,
        password: login.password,
      }),
    });
    const authData = await auth.json();
    const user = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/users/2");
    const userData = await user.json();
    return { authData, userData };
  } catch {
    throw "Invalid Credentials";
  }
}
