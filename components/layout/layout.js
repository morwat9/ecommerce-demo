import Head from "next/head";
import Navbar from "../navbar/navbar.js";
import Footer from "../footer/footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
