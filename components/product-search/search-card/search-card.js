import styles from "./search-card.module.css";
import Image from "next/image";
import StarRating from "../../star-rating/star-rating";
import { useRouter } from "next/router";

export default function SearchCard(product) {
  const router = useRouter();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles["wrapper"]}>
      <div
        className={styles["picture"]}
        onClick={() => router.push("/shop/" + product.id)}
      >
        <Image src={product.image} layout="fill" objectFit="contain" />
      </div>
      <div className={styles["description"]}>
        <div>
          {product.title <= 30
            ? product.title
            : product.title.slice(0, 29) + "..."}
        </div>
        <StarRating value={Math.floor(product.rating.rate)} />
        <span>{" (" + product.rating.count + ")"}</span>
        <div>{formatter.format(product.price)}</div>
      </div>
    </div>
  );
}
