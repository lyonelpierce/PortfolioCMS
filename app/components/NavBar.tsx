import Link from "next/link";
import Image from "next/image";

const NavBar = ({ logo }: any) => {
  return (
    <nav className="fixed max-w-7xl mx-auto p-6 top-0 left-0 right-0 z-50">
      <div className="flex flex-row justify-between">
        <Image src={logo} alt="LP Logo" width={50} height={50} className="" />
        <ul className="flex flex-row items-center gap-12 font-bold">
          <li className="hover:text-[#f66e4c]">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-[#f66e4c]">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="hover:text-[#f66e4c]">
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-[#f66e4c]">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center">Dark Mode</div>
      </div>
    </nav>
  );
};

export default NavBar;
