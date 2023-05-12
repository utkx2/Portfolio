import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h4 className={styles.sectionHeadText}>Hobbies & Interests.</h4>
          <p className={styles.sectionSubText}>
            <ul>
              <li>Running : Passionate about running and participate in local races. Completed multiple half-marathons.</li>
              <li>Calisthenics: Enjoys practicing calisthenics and challenging myself with new moves. </li>
              <li>Listning Music: I love listening to music. My favourite type of music is phonk, rock & hip hop.</li>
            </ul>
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
</div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
