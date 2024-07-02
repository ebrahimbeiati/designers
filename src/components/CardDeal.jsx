import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className="m-10 ">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} mt-10 md:mt-0`}>
      <img
        src={card}
        alt="billing"
        className="w-full md:w-[70%] h-auto object-cover transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  </section>
);

export default CardDeal;
