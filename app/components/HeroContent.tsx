interface HeroContentProps {
  info: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({ info }) => {
  return (
    <section
      id="home"
      className="flex flex-row justify-between items-center min-h-screen"
    >
      <div className="w-[40%]">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          {info[0]}
        </h1>
        <h2 className="font-semibold my-3">{info[1]}</h2>
        <button className="border border-[#f66e4c] p-3 px-5 rounded-lg font-bold uppercase text-[#f66e4c] hover:bg-[#f66e4c] hover:text-[#1f1f1f]">
          Get In Touch
        </button>
      </div>
      <div className="w-[60%] bg-[#f66e4c] w-full hero-container min-h-screen"></div>
    </section>
  );
};

export default HeroContent;
