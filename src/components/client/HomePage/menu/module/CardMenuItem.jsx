"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CardMenuItem({ data }) {
    return (
        <motion.div
            className="flex items-center justify-center flex-col relative md:w-[290px] cursor-pointer m-auto mb-8 md:mb-auto"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
        >

            <motion.div
                className="w-[152px] h-[80px] md:w-full md:h-[160px] bg-[#417F56] rounded-xl absolute bottom-0 shadow-lg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            />


            <motion.div
                className="relative z-10 md:mb-10"
                initial={{ opacity: 0, y: -40, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Image
                    src={data.image}
                    alt={data.name}
                    width={240}
                    height={240}
                    className="w-[120px] h-[120px] md:w-[240px] md:h-[240px] object-contain drop-shadow-xl"
                />
            </motion.div>

            <motion.div
                className="flex items-center justify-center text-black font-medium text-[12px] md:text-sm w-[96px] h-[32px] md:w-[170px] md:h-[52px] border border-gray-200 shadow-xl rounded-lg md:rounded-xl bg-white relative z-20 -mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
            >
                {data.name}
            </motion.div>
        </motion.div>
    );
}

export default CardMenuItem;
