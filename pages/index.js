import styles from "../styles/home.module.css";
import Layout from "../components/layout/layout.js";
import Image from "next/image";
import banner from "../public/pexels-andrea-piacquadio-3768124.jpg";
import ProductSearch from "../components/product-search/product-search";
import { getData } from "./api/products";

export default function Home({ data }) {
  return (
    <Layout>
      <div className={styles["banner-wrapper"]}>
        <Image src={banner} objectFit="cover" layout="fill" />
      </div>
      <div className={styles["home-card-container"]}>
        <ProductSearch data={data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getData();
  return { props: { data } };
}
