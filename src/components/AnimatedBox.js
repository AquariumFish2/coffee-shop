import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedBox(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controlls.start("end");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, transform: "translateY(20px)" },
        end: { opacity: 1, transform: "translateY(0px)" },
      }}
      initial={"start"}
      animate={controlls}
      transition={{ duration: 1, delay: 0.1 }}
      style={{ width: "100%" }}
    >
      {props.children}
    </motion.div>
  );
}

export default AnimatedBox;
