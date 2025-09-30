import React, {useState} from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import {dataBlog} from "@/utils/DataMenu";
import { IoMdClose } from "react-icons/io";


function PopupImage({setPopupImage}) {
    const [minImage , setMinImage] = useState("/image/imgBlog3.jpg")
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div
                className="relative w-[350px] md:w-[850px] h-[352px] md:h-[470px] flex flex-col items-center rounded-2xl  md:backdrop-blur-md md:border md:border-white/30 shadow-2xl"
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.7, opacity: 0}}
                transition={{duration: 0.35, ease: "easeInOut"}}
            >
                <div className="relative">
                    <div onClick={() => setPopupImage(false)} className="absolute cursor-pointer pl-5 mt-5 text-2xl text-black font-bold flex items-end justify-end m-auto w-full">
                        <IoMdClose />
                    </div>
                    <div>
                        <Image src={minImage} alt="image" width={850} height={470}
                               className="w-[390px] md:w-[850px] h-[352px] md:h-[470px] rounded-2xl"/>
                    </div>
                    <div className=" absolute flex items-center justify-center m-auto w-full bottom-5  mt-2 ">
                        {
                            dataBlog.map((items) => (
                                <Image key={items.id} onClick={() => setMinImage(items.image)} src={items.image} alt="image" width={88} height={88} className="cursor-pointer object-cover mr-5 md:mr-10 rounded-lg w-[55px] h-[55px] md:w-[70px] md:h-[70px] hover:scale-105 transition hover:border hover:border-white"/>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PopupImage;