"use client";
import Link from "next/link";

interface BiographyProps {
  info: string[];
}

const Biography: React.FC<BiographyProps> = ({ info }) => {
  return (
    <section id="about" className="flex flex-row justify-between items-center">
      <div className="w-[50%] bg-[#f66e4c] hero-container about-container"></div>

      <div className="w-[50%]">
        <p className="text-base text-white leading-relaxed leading-8">
          {info[0]}
        </p>
        <div className="flex gap-5">
          <button className="bg-[#f66e4c] mt-8 p-3 px-5 rounded-lg font-bold uppercase text-white hover:bg-white hover:text-[#f66e4c]">
            Hire Me
          </button>
          <Link href={info[1]} target="_blank">
            <button className="border border-white bg-[#1f1f1f] mt-8 p-3 px-10 rounded-lg font-bold uppercase text-white hover:bg-white hover:text-[#1f1f1f]">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biography;
