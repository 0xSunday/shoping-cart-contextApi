import Navbar from "@/components/Navbar";
import Context from "@/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
