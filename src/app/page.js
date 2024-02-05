import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <Customers />
      </main>
    </>
  );
}
