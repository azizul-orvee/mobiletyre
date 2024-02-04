import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile Tyre Mate",
  description: "We are a mobile tyre fitting service provider.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
