import styles from "../styles/profile.module.css";
import Layout from "../components/layout/layout";
import { useEffect } from "react";
import { useUserContext } from "../context/user/user-context";
import { useRouter } from "next/router";

export default function Profile() {
  const { userState, userDispatch } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(userState).length === 0) {
      router.push("/");
    }
  });

  return (
    <Layout>
      <div className={styles["wrapper"]}>
        <div className={styles["labels"]}>
          <p>Name: </p>
          <p>Username: </p>
          <p>Email: </p>
          <p>Phone Number: </p>
          <p>Address: </p>
        </div>
        <div className={styles["details"]}>
          <p>{userState.name.firstname + " " + userState.name.lastname}</p>
          <p>{userState.username}</p>
          <p>{userState.email}</p>
          <p>{userState.phone}</p>
          <p>
            {userState.address.number +
              " " +
              userState.address.street +
              ", " +
              userState.address.city +
              " " +
              userState.address.zipcode}
          </p>
        </div>
      </div>
    </Layout>
  );
}
