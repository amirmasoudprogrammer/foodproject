import React from "react";
import { motion } from "framer-motion";
import TitleHomeComponents from "@/shared/TitleHomeComponents";
import { dataBlog } from "@/utils/DataMenu";
import CardPopup from "@/shared/layout/header/popItem/CardPopup";

function PopupItems({ onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="relative w-[850px] h-[470px] flex flex-col items-center rounded-2xl bg-white backdrop-blur-md border border-white/30 shadow-2xl"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >

                <div className="flex items-center justify-between w-full">
                    <div className="m-auto">
                        <TitleHomeComponents title="انتخاب شعبه" />
                    </div>
                    <button
                        onClick={() => onClose(false)}
                        className="text-2xl text-black ml-5 font-bold rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        ✕
                    </button>
                </div>


                <div className="flex flex-col items-center justify-center ">
          <span className="text-[#353535] mb-4">
            برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
          </span>

                    <div className="flex items-center justify-between gap-4">
                        {dataBlog.map((item) => (
                            <CardPopup key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PopupItems;
