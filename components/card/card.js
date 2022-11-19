import styles from "./card.module.css";
import Image from "next/image";
import StarRating from "../star-rating/star-rating.js";
import { useRouter } from "next/router";

export default function Card(product) {
  const router = useRouter();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div className={styles["wrapper"]}>
        <div
          className={styles["picture"]}
          onClick={() => router.push("/shop/" + product.id)}
        >
          <Image src={product.image} layout="fill" objectFit="contain" />
        </div>
        <div className={styles["detail"]}>
          <div>
            <span
              className={styles["title"]}
              onClick={() => router.push("/shop/" + product.id)}
            >
              {product.title.length <= 40
                ? product.title
                : product.title.slice(0, 39) + "..."}
            </span>
          </div>
          <div className={styles["rating"]}>
            <StarRating value={Math.floor(product.rating.rate)} />
            <span>{" (" + product.rating.count + ")"}</span>
          </div>
          <div className={styles["description"]}>
            <span>
              {product.description.length <= 200
                ? product.description
                : product.description.slice(0, 200) + "..."}
            </span>
          </div>
          <div className={styles["price"]}>
            <span>{formatter.format(product.price)}</span>
          </div>
        </div>
      </div>
      {product.length - 1 != product.index && (
        <div className={styles["break"]}></div>
      )}
    </div>
  );
}
