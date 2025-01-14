'use client';
import { motion } from "framer-motion";
import React from "react";
import "../styles/Preloader_module.css";

export default function Preloader ({onComplete})  {
    const [isAnimating, setIsAnimating] = React.useState(true);
    React.useEffect (() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
            onComplete();
    }, 0);


    return () =>  clearTimeout(timer);
}, [onComplete]);


  return (
    <motion.div
    className="preloader"
    initial={{ opacity: 1 }}
    animate={{ opacity: isAnimating ? 1 : 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
        <motion.div
        className="loader"
        initial={{ scale: 0 }}
        animate={{ scale: [1,1.5,1] }}
        transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "easeInOut"
        }}
        >
        </motion.div>
    </motion.div>
  );
};