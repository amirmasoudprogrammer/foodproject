import React, {useState} from 'react';
import {motion} from "framer-motion";
import {IoMdClose} from "react-icons/io";
import {CiSearch} from "react-icons/ci";
import {useRouter} from "next/navigation";


function PopupSearch({setPopupSearch}) {
    const [query, setQuery] = useState("");
    const router = useRouter();


    const handleKeyDown = (e) => {
        if (e.key === "Enter" && query.trim() !== "") {
            router.push(`/search?query=${query}`);
        }

    }


    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div
                className="relative w-[600px] h-[253px] flex flex-col items-center rounded-2xl bg-white backdrop-blur-md border border-white/30 shadow-2xl"
                initial={{scale: 0.7, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.7, opacity: 0}}
                transition={{duration: 0.35, ease: "easeInOut"}}
            >
                <div
                    className="w-[600px] h-[84px] bg-[#EDEDED] rounded-t-2xl text-black flex items-center justify-between">
                    <span className="m-auto font-bold ">جستجو</span>
                    <div onClick={() => setPopupSearch(false)} className="cursor-pointer ml-5 text-2xl text-[#717171]"><IoMdClose/></div>
                </div>
                <div className="mt-10 flex flex-col items-center">
                    <span className="text-[#353535]">لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</span>
                    <div className="flex rounded-lg items-center justify-between w-[409px] h-[40px] border border-[#CBCBCB] mt-5">
                        <input onKeyDown={handleKeyDown} value={query} onChange={(e) => setQuery(e.target.value)}
                               type="search" placeholder="جستجو..." className="w-[409px] outline-0 text-black mr-2"/>
                        <span className="text-black ml-2"><CiSearch/></span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PopupSearch;