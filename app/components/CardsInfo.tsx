"use client";
import { FiChevronRight } from "react-icons/fi";
import { LiaAwardSolid } from "react-icons/lia";
import { PiProjectorScreenChart, PiUsersThreeLight } from "react-icons/pi";
import Link from "next/link";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CardsInfo = () => {
  useEffect(() => {
    const e = gsap.utils.toArray(".stats-section .stats-item");
    gsap.registerPlugin(ScrollTrigger);

    const t = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats-item",
        start: "top 82%",
        end: "top 50%",
        scrub: 0.3,
      },
    });

    e.forEach(function (e, o) {
      const n = 0 === o ? "" : "< +=0.2";
      t.from(e as gsap.TweenTarget, { autoAlpha: 0 }, n).from(
        e as gsap.TweenTarget,
        { y: 50 },
        "<"
      );
    });
    e.forEach((element) => {
      const htmlElement = element as HTMLElement;

      htmlElement.addEventListener("mouseenter", () => {
        gsap.to(htmlElement, { y: -25, duration: 0.3 });
      });

      htmlElement.addEventListener("mouseleave", () => {
        gsap.to(htmlElement, { y: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section className="flex flex-row justify-between w-full gap-5">
      <ul className="flex gap-8 w-full stats-section">
        <li className="bg-[#303030] rounded-xl shadow-2xl w-1/3 stats-item">
          <Link
            href="#experience"
            className="flex justify-between items-center p-10"
          >
            <LiaAwardSolid
              size={60}
              className="bg-white text-black rounded-full p-2"
            />
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#f66e4c]">5+</p>
              <span className="font-semibold">Years of Experience</span>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </li>
        <li className="bg-[#303030] rounded-xl shadow-2xl w-1/3 stats-item">
          <Link
            href="#experience"
            className="flex justify-between items-center p-10"
          >
            <PiProjectorScreenChart
              size={60}
              className="bg-[#f66e4c] text-white rounded-full p-2"
            />
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#f66e4c]">30+</p>
              <span className="font-semibold">Completed Projects</span>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </li>
        <li className="bg-[#303030] rounded-xl shadow-2xl w-1/3 stats-item">
          <Link
            href="#experience"
            className="flex justify-between items-center p-10"
          >
            <PiUsersThreeLight
              size={60}
              className="bg-[#1f1f1f] text-white rounded-full p-2"
            />
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#f66e4c]">15+</p>
              <span className="font-semibold">Happy Clients</span>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CardsInfo;
