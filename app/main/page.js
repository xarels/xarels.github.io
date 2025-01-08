'use client';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <motion.div 
    className="main"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
    
    <Navbar />

    


    </motion.div>
  );
}
