"use client"
import React from 'react';
import Image from "next/image";
import {GoChevronLeft} from "react-icons/go";
import {IoImageOutline} from "react-icons/io5";
import {FaExpand} from "react-icons/fa";
import Link from "next/link";


function CardBlog({data, setPopupImage}) {

    const startPopup = () => {
        setPopupImage(true)
    }
    return (
        <>
            <div
                className="hidden md:block group hover:scale-105 cursor-pointer transition-all w-[288px] h-[344px] border border-[#eeeee] shadow-md mr-5 rounded-xl">
                <div className="relative group">
                    <Image src={data.image} alt="image" width={288} height={230}
                           className="rounded-t-xl transition-all group-hover:h-[190px] w-[288px] h-[230px]"/>
                    <div
                        className="absolute inset-0 w-[285px] h-[190px] bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl z-10"></div>
                    <div
                        className="hidden group-hover:flex absolute inset-0 items-center justify-center text-white font-bold z-20">
                        <div className="relative flex items-center justify-center">
                            <div
                                className="absolute w-[58px] h-[58px] rounded-full bg-white/30 border border-white/30 animate-ping"></div>

                            <div
                                className="absolute w-[58px] h-[58px] rounded-full bg-white/20 border border-white/20 animate-ping delay-500"></div>

                            <div
                                className="w-[58px] h-[58px] rounded-full bg-white/30 border border-white/30 flex items-center justify-center shadow-md relative z-10">
                                <div onClick={() => startPopup()}
                                     className="w-[38px] h-[38px] rounded-full bg-white/30 border border-white/30 flex items-center justify-center shadow-md">
        <span className="text-2xl">
          <IoImageOutline/>
        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-black text-center mt-2">
               <span className='text-xl font-bold '>
                {data.name}
            </span>
                    <p className="text-[14px] mt-3 p-2">
                        {data.desc}
                    </p>
                </div>
                <Link href=""
                      className="hidden cursor-pointer group-hover:flex text-[#315F41] items-center m-auto rounded-md justify-center w-[128px] h-[32px] border border-[#315F41]">
                    صفحه شعبه
                    <span><GoChevronLeft/></span>
                </Link>
            </div>

            <div className="flex md:hidden w-[318px] h-[80px] border border-[#417F56] rounded-md mb-5 ">
                <div className="relative">
                    <Image src={data.image} alt="image" width={144} height={80}
                           className=" w-[144px] h-[80px] object-cover"/>
                    <div onClick={() => startPopup()} className="cursor-pointer absolute top-14 mr-2">
                        <span className="text-lg">    <FaExpand/></span>

                    </div>
                </div>
                <div className="text-black flex items-center flex-col justify-center w-[166px] h-[80px] text-center">
                    <span className="text-[14px] mb-2 font-medium">{data.name}</span>
                    <p className="text-[10px] mr-2 mb-2">{data.desc}</p>
                </div>
            </div>

        </>
    );
}

export default CardBlog;