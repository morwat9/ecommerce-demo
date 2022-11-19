import styles from "./cart-item.module.css";
import Image from "next/image";
import { Button } from "@mui/material";

export default function CartItem({ product, cart, setCart }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleAdd() {
    const cartCopy = [...cart];
    cartCopy[cartCopy.findIndex((item) => item.id === product.id)].amount++;
    setCart(cartCopy);
    window.localStorage.setItem("cart", JSON.stringify(cartCopy));
  }

  function handleSubtract() {
    const cartCopy = [...cart];
    cartCopy[cartCopy.findIndex((item) => item.id === product.id)].amount--;
    setCart(cartCopy.filter((item) => item.amount > 0));
    window.localStorage.setItem(
      "cart",
      JSON.stringify(cartCopy.filter((item) => item.amount > 0))
    );
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["picture"]}>
        <Image src={product.image} layout="fill" objectFit="contain" />
      </div>
      <div className={styles["description"]}>
        <div>
          {product.title <= 40
            ? product.title
            : product.title.slice(0, 39) + "..."}
        </div>
        <br />
        <div>{formatter.format(product.price)}</div>
        <br />
        <div>{"AMOUNT: " + product.amount}</div>
      </div>
      <div className={styles["button-group"]}>
        <Button variant="contained" onClick={() => handleSubtract()}>
          -
        </Button>
        <Button variant="contained" onClick={() => handleAdd()}>
          +
        </Button>
      </div>
    </div>
  );
}
