import Layout from "../../components/layout/layout.js";
import styles from "../../styles/shop.module.css";
import Card from "../../components/card/card.js";
import { getData } from "../api/products/index.js";

export default function Shop({ data }) {
  return (
    <Layout>
      <div className={styles["wrapper"]}>
        {data.map((product, index) => (
          <Card
            key={product.id}
            {...product}
            length={data.length}
            index={index}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getData();
  return { props: { data } };
}
