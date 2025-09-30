import React, {useState} from 'react';
import Image from "next/image";
import {IoMdClose} from "react-icons/io";
import {motion, AnimatePresence} from "framer-motion";

import Link from "next/link";
import {RiHome2Line} from "react-icons/ri";
import {FaUsers} from "react-icons/fa";
import {IoCallOutline} from "react-icons/io5";
import {IoIosMenu} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
import {FaShop} from "react-icons/fa6";


function MenuMobile({setShowMenu}) {
    const [showMenuMobile, setShowMenuMobile] = useState(false)
    const [showMenuBranch, setShowMenuBranch] = useState(false);

    return (
        <div className="flex md:hidden absolute inset-0 bg-black/10 backdrop-blur-sm z-50">

            <motion.div
                initial={{x: 300, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 300, opacity: 0}}
                transition={{duration: 0.4, ease: "easeInOut"}}
                className="fixed inset-0 z-50 flex"
            >


                <div className="relative w-[256px] h-full bg-white shadow-xl z-50">
                    <div
                        className="relative w-full h-[100px] bg-[url('/image/imagecaverMenu.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/55">
                        <div className="relative z-10 flex items-center justify-between px-5 w-full h-full">
                            <div>
                                <Image
                                    src="/image/LogoMobile.svg"
                                    alt="Logo"
                                    width={67}
                                    height={30}
                                    priority
                                />
                            </div>
                            <div
                                onClick={() => setShowMenu(false)}
                                className="mb-12 font-bold cursor-pointer"
                            >
                                <IoMdClose size={20}/>
                            </div>
                        </div>
                        <div className="px-5 divide-y divide-[#eeeeee]">
                            <div className="flex items-center justify-start mt-5  text-black hover:text-[#417F56]">
                                <RiHome2Line/>
                                <Link className="text-[12px] mr-2" href="/">صفحه اصلی</Link>
                            </div>
                            <div onClick={() => setShowMenuMobile(!showMenuMobile)}
                                 className="mt-5 pt-2 text-black text-[12px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center ">
                                        <IoIosMenu/>
                                        <Link className="mr-2" href=""> منو</Link>
                                    </div>
                                    <IoIosArrowDown/>
                                </div>
                                <AnimatePresence>
                                    {
                                        showMenuMobile && (
                                            <motion.div
                                                initial={{height: 0, opacity: 0}}
                                                animate={{height: "auto", opacity: 1}}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.3, ease: "easeInOut"}}
                                                className="bg-white/95 backdrop-blur-md mt-2 rounded-xl shadow-inner px-5 py-4 flex flex-col items-start overflow-hidden"
                                            >
                                                <Link className="mb-5" href="">غذای اصلی</Link>
                                                <Link className="mb-5" href="">پیش غذا</Link>
                                                <Link className="mb-5" href="">دسر</Link>
                                                <Link className="" href="">نوشیدنی</Link>
                                            </motion.div>
                                        )
                                    }

                                </AnimatePresence>
                            </div>
                            <div onClick={() => setShowMenuBranch(!showMenuBranch)}
                                 className="mt-5 pt-2 text-black text-[12px]">
                                <div className="flex items-center justify-between">
                                    <div  className="flex items-center ">
                                        <FaShop/>
                                        <Link className="mr-2" href=""> شعبه</Link>
                                    </div>
                                    <IoIosArrowDown/>
                                </div>
                                <AnimatePresence>
                                    {
                                        showMenuBranch && (
                                            <motion.div
                                                initial={{height: 0, opacity: 0}}
                                                animate={{height: "auto", opacity: 1}}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.3, ease: "easeInOut"}}
                                                className="bg-white/95 backdrop-blur-md mt-2 rounded-xl shadow-inner px-5 py-4 flex flex-col items-start overflow-hidden"
                                            >
                                                <Link className="mb-5" href="">اکباتان</Link>
                                                <Link className="mb-5" href="">چالوس</Link>
                                                <Link className="mb-5" href="">اقدسیه</Link>
                                                <Link className="" href="">ونک</Link>
                                            </motion.div>
                                        )
                                    }

                                </AnimatePresence>
                            </div>
                            <div className="flex items-center justify-start mt-5 pt-2 text-black hover:text-[#417F56]">
                                <FaUsers/>
                                <Link className="text-[12px] mr-2" href="/">درباره ما</Link>
                            </div>
                            <div className="flex items-center justify-start mt-5 pt-2 text-black hover:text-[#417F56]">
                                <IoCallOutline/>
                                <Link className="text-[12px] mr-2" href="/">تماس با ما</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

export default MenuMobile;
