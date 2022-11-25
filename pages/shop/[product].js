import { useRouter } from "next/router";
import Layout from "../../components/layout/layout.js";
import styles from "../../styles/product.module.css";
import Image from "next/image";
import StarRating from "../../components/star-rating/star-rating.js";
import { Button } from "@mui/material";
import { useUserContext } from "../../context/user/user-context.js";
import { getData } from "../api/products/[product-id].js";

export default function ProductPage(product) {
  const { userState, userDispatch } = useUserContext();

  const router = useRouter();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function addToCart() {
    if (userState.username === "") {
      return router.push("/sign-in");
    }

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem(
        "cart",
        JSON.stringify([{ ...product, amount: 1 }])
      );
    } else {
      const parsedCart = JSON.parse(window.localStorage.getItem("cart"));
      const cartCopy = [...parsedCart];

      if (cartCopy.find((item) => item.id === product.id)) {
        const i = cartCopy.findIndex((item) => item.id === product.id);
        cartCopy[i].amount++;
        window.localStorage.setItem("cart", JSON.stringify(cartCopy));
      } else {
        cartCopy.push({ ...product, amount: 1 });
        window.localStorage.setItem("cart", JSON.stringify(cartCopy));
      }
    }
    return router.push("/shop");
  }

  return (
    <Layout>
      <div className={styles["wrapper"]}>
        <div className={styles["picture"]}>
          <Image src={product.image} layout="fill" objectFit="contain" />
        </div>
        <div>
          <div className={styles["title"]}>
            <span>{product.title}</span>
          </div>
          <div className={styles["rating"]}>
            <StarRating value={Math.floor(product.rating.rate)} />
            <span>{" (" + product.rating.count + ")"}</span>
          </div>
          <div className={styles["description"]}>{product.description}</div>
          <div className={styles["price"]}>
            <span>{formatter.format(product.price)}</span>
          </div>
          <Button
            color="warning"
            variant="contained"
            onClick={() => addToCart()}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await getData(context.query.product);
  return { props: data };
}
