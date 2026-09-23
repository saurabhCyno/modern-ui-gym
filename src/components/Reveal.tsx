"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const CONTAINER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
  y?: number;
};

export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  y = 32,
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const RevealStagger: React.FC<React.ComponentProps<typeof motion.div>> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div {...rest}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              initial: { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6, delay: index * 0.1, ease: EASE },
            } as React.ComponentProps<typeof motion.div>)
          : child
      )}
    </motion.div>
  );
};