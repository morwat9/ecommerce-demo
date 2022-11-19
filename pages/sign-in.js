import styles from "../styles/sign-in.module.css";
import Layout from "../components/layout/layout.js";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUserContext } from "../context/user/user-context";
import { useEffect } from "react";

export default function SignIn() {
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { userState, userDispatch } = useUserContext();

  const router = useRouter();

  function handleInput(value) {
    setUser({ username: value.username, password: value.password });
    setErr(false);
  }

  useEffect(() => {
    if (userState.username != "") {
      router.push("/");
    }
  });

  async function signIn(e) {
    e.preventDefault();
    if (user.username != "" && user.password != "") {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/login",
          {
            method: "POST",
            body: JSON.stringify({ ...user }),
          }
        );
        const data = await res.json();
        window.localStorage.setItem("token", data.authData.token);
        userDispatch(data.userData);
        router.push("/");
      } catch (error) {
        console.log("Invalid Credentials");
        setErr(true);
      }
    } else {
      console.log("username and password must be filled out");
    }
  }

  return (
    <Layout>
      <div className={styles["wrapper"]}>
        <form onSubmit={(e) => signIn(e)}>
          <div className={styles["box"]}>
            <div className={styles["login-fields"]}>
              <div className={styles["field"]}>
                <TextField
                  label="Username"
                  error={err}
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(e) =>
                    handleInput({
                      username: e.target.value,
                      password: user.password,
                    })
                  }
                  required
                />
              </div>
              <div className={styles["field"]}>
                <TextField
                  label="Password"
                  type="password"
                  error={err}
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(e) =>
                    handleInput({
                      username: user.username,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className={styles["button"]}>
              <Button type="submit" color="warning" variant="contained">
                Sign In
              </Button>
            </div>
            <div>
              <span>username: mor_2314 password: 83r5^_</span>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
