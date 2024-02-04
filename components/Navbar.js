import Image from "next/image";
import logo from '../public/image/facebook-pixel-icon.png'

const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex px-20 justify-between items-center max-container">
        <a href="/">
          <h1 className="m-0 text-slate-gray">Mobile Tyre Mate</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
      <Image
        src={logo}
        alt= "priya is beautiful"
        width={30}
        height={30}
      />
    </header>
  );
};

export default Navbar;
