export default async function userHandler(req, res) {
  try {
    const auth = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: req.body,
    });
    const authData = await auth.json();

    const user = await fetch(process.env.NEXT_PUBLIC_DATA_URL + "/users/2");
    const userData = await user.json();
    return res.status(200).send({ authData, userData });
  } catch (error) {
    res.status(401).send("invalid credentials", error);
  }
}
