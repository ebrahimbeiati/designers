import styles from "../style";
import { discount, robot } from "../assets";
// import GetStart from "./GetStart";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mr-10`}
    >
      <div className={`flex-1 flex flex-col xl:px-0 sm:px-16 px-4`}>
        <div className="flex flex-wrap items-center py-[6px] px-2 bg-discount-gradient rounded-[10px] mb-3">
          <img src={discount} alt="discount" />
          <p className={`text-white text-[24px]`}>
            Your website is your introduction
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Proudly <br className="sm:block hidden" />{" "}
            <span className="text-gradient">to a world of unique design </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Welcome!
        </h1>
        <p className="text-white max-w-[470px] text-[24px] mt-5">
          In today's digital world, your website represents the identity and
          credibility of your business. At Web Designing, we believe that every
          website should reflect the dreams, goals, and unique values of each
          brand. By combining art and technology, we create websites that are
          not only beautiful and eye-catching but also efficient and
          user-friendly.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* 
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStart />
      </div> */}
    </section>
  );
};

export default Hero;
