import Image from "next/image";
import logo from "../../public/image/facebook-pixel-icon.png";
import Tyre from "../../public/svg/burger-menu-svgrepo-com.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex px-20 justify-between items-center max-container">
        <a href="/">
          <h1 className="m-0 text-slate-gray">Mobile Tyre Mate</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
