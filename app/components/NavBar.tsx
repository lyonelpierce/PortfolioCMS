"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = ({ logo }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const prevScrollPosition = useRef<number>(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollPosition.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      prevScrollPosition.current = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (scrollPosition === 0) {
      gsap.to(navbar, { opacity: 1, y: 0, duration: 1 });
      headerRef.current?.classList.remove("header-small");
    } else if (scrollDirection === "down") {
      gsap.to(navbar, { opacity: 0, y: -100, duration: 1 });
      headerRef.current?.classList.add("header-small");
    } else if (scrollDirection === "up") {
      gsap.to(navbar, { opacity: 1, y: 0, duration: 1 });
    }
  }, [scrollPosition, scrollDirection]);

  return (
    <nav
      className="fixed p-6 top-0 left-0 right-0 z-50 navbar transition-all ease-in-out"
      ref={headerRef}
    >
      <div className="flex max-w-7xl mx-auto flex-row justify-between">
        <Image src={logo} alt="LP Logo" width={50} height={50} />
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
