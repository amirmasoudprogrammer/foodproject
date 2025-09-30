"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/client/layout/header/menu/Menu";
import {menuItem, menuItem2} from "@/utils/DataMenu";
import {IoSearchOutline} from "react-icons/io5";
import {RiShoppingCart2Line} from "react-icons/ri";
import {FaRegUser} from "react-icons/fa";
import {IoMenuOutline} from "react-icons/io5";
import MenuMobile from "@/components/client/layout/header/menu/MenuMobile";
import {AnimatePresence} from "framer-motion";
import PopupItems from "@/components/client/layout/header/popItem/PopupItems";


function Header(props) {
    const [showMenu, setShowMenu] = useState(false)
    const [popItem, setPopItem] = useState(false)

    return (
        <>
            {/*Desktop*/}
            <header className="hidden bg-white w-full h-[100px] px-8 shadow-md  md:flex items-center justify-around">
                <div>
                    <Link href="/PROGRMMING/NEXT/foodproject/public">
                        <Image
                            src="/image/Logo.svg"
                            alt="Logo"
                            width={155}
                            height={51}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex items-center justify-between">
                    <li className="ml-5 group">
                        <Link href="" className="
      relative text-[#717171] text-md ml-2
      transition-all duration-300
     font-normal
      group-hover:text-[#417F56] group-hover:font-bold
    "
                        >
                            صفحه اصلی
                            <span
                                className="
        absolute left-1/2 -bottom-1 h-[2px] w-0
        bg-[#417F56] transition-all duration-300
        group-hover:w-full group-hover:left-0
      "
                            ></span>
                        </Link>
                    </li>

                    <Menu setPopItem={setPopItem} label="شعبه" children={menuItem} mr="ml-5"/>
                    <Menu label="منو" children={menuItem2}/>
                    <li className="mr-5 group">
                        <Link href="" className="
      relative text-[#717171] text-md ml-2
      transition-all duration-300
          font-normal
      group-hover:text-[#417F56] group-hover:font-bold
    "
                        >
                            اعطای نمایندگی
                            <span
                                className="
        absolute left-1/2 -bottom-1 h-[2px] w-0
        bg-[#417F56] transition-all duration-300
        group-hover:w-full group-hover:left-0
      "
                            ></span>
                        </Link>
                    </li>
                    <li className="mr-5 group">
                        <Link href="" className="
      relative text-[#717171] text-md ml-2
      transition-all duration-300
          font-normal
      group-hover:text-[#417F56] group-hover:font-bold
    "
                        >
                            درباره ما
                            <span
                                className="
        absolute left-1/2 -bottom-1 h-[2px] w-0
        bg-[#417F56] transition-all duration-300
        group-hover:w-full group-hover:left-0
      "
                            ></span>
                        </Link>
                    </li>
                    <li className="mr-5 group">
                        <Link href="" className="
      relative text-[#717171] text-md ml-2
      transition-all duration-300
          font-normal
      group-hover:text-[#417F56] group-hover:font-bold
    "
                        >
                            تماس با ما
                            <span
                                className="
        absolute left-1/2 -bottom-1 h-[2px] w-0
        bg-[#417F56] transition-all duration-300
        group-hover:w-full group-hover:left-0
      "
                            ></span>
                        </Link>
                    </li>

                </div>
                <div className="flex items-center justify-center">
                    <div
                        className="w-[40px] mr-4 h-[40px] bg-[#E5F2E9] text-[#417F56] flex items-center justify-center rounded">
                        <IoSearchOutline size={24}/>
                    </div>
                    <div
                        className="w-[40px] mr-4 h-[40px] bg-[#E5F2E9] text-[#417F56] flex items-center justify-center rounded">
                        <RiShoppingCart2Line size={24}/>

                    </div>
                    <div
                        className="w-[40px] mr-4 h-[40px] bg-[#E5F2E9] text-[#417F56] flex items-center justify-center rounded">
                        <FaRegUser size={24}/>

                    </div>

                </div>
            </header>

            {/*Mobile*/}
            <header className="flex items-center justify-between md:hidden px-8 py-5 shadow-md">
                <div onClick={() => setShowMenu(!showMenu)} className="text-[#417F56] cursor-pointer"><IoMenuOutline
                    size={24}/></div>
                <div>
                    <Link href="">
                        <Image
                            src="/image/Logo.svg"
                            alt="Logo"
                            width={102}
                            height={32}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex  items-center">
                    <div
                        className="w-[24px] ml-2 cursor-pointer h-[24px] bg-[#E5F2E9] text-[#417F56] flex items-center justify-center rounded">
                        <RiShoppingCart2Line size={16}/>

                    </div>
                    <div
                        className="w-[24px]  h-[24px] cursor-pointer bg-[#E5F2E9] text-[#417F56] flex items-center justify-center rounded">
                        <FaRegUser size={16}/>
                    </div>

                </div>
            </header>

            <AnimatePresence>
                {

                    showMenu && (
                        <MenuMobile setShowMenu={setShowMenu}/>
                    )
                }
            </AnimatePresence>

            <AnimatePresence>
            {
                popItem && (
                    <PopupItems onClose={setPopItem}/>
                )
            }
            </AnimatePresence>
        </>
    );
}

export default Header;