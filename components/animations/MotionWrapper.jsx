"use client";

import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({
    children,
    className,
    initial = { opacity: 0, y: 20 },
    animate = { opacity: 1, y: 0 },
    exit = { opacity: 0, y: -20 },
    transition = { duration: 0.3 },
    ...props
}) => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
