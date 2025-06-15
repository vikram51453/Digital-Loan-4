// File: pages/_app.js
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"; // <-- Import Vercel Analytics

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* <-- This activates analytics */}
    </>
  );
}
