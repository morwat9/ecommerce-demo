import styles from "../styles/cart.module.css";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/user/user-context";
import CartItem from "../components/cart/cart-item";

export default function Cart() {
  const [cart, setCart] = useState();
  // JSON.parse(window.localStorage.getItem("cart"))
  const { userState, userDispatch } = useUserContext();

  const router = useRouter();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function getAmount() {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount;
    });
    return total;
  }

  function getPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.amount;
    });
    return total;
  }

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/");
    }
    setCart(JSON.parse(window.localStorage.getItem("cart")));
  }, []);

  if (cart === undefined || cart.length === 0) {
    return (
      <Layout>
        <div className={styles["wrapper"]}>
          <div className={styles["empty-message"]}>Your Cart is empty!</div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={styles["wrapper"]}>
          {cart.map((product) => (
            <CartItem
              product={product}
              cart={cart}
              setCart={setCart}
              key={product.id}
            />
          ))}
          <div className={styles["break"]}></div>
          <div className={styles["totals"]}>
            <div>{"Total Items: " + getAmount()}</div>
            <br />
            <div>{"Price: " + formatter.format(getPrice())}</div>
          </div>
        </div>
      </Layout>
    );
  }
}
