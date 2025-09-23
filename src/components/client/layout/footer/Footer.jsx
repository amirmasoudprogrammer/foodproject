"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {CiTwitter, CiInstagram} from "react-icons/ci";
import {FaTelegramPlane} from "react-icons/fa";

function Footer() {
    const [text, setText] = useState("");

    return (
        <footer className="relative w-full h-[350px]">

            <div className="absolute inset-0 bg-[url('/image/bannerFooter.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/65"></div>


            <div className="relative z-10 flex justify-around pt-20 items-start  w-full md:grid  md:grid-cols-4 gap-8  md:px-32 md:py-10 text-white">


                <div className="flex flex-col  ">
                    <h2 className="font-medium text-[12px] md:text-[20px] mb-4">دسترسی آسان</h2>
                    <ul className="space-y-3 text-[14px]">
                        <li className=""><Link href="">پرسش‌های متداول</Link></li>
                        <li><Link href="">قوانین ترخینه</Link></li>
                        <li><Link href="">حریم خصوصی</Link></li>
                        <li className="flex space-x-3 mt-2">
                            <Link className="text-xl md:text-sm ml-2" href=""><CiTwitter/></Link>
                            <Link className="text-xl md:text-sm mr-2" href=""><CiInstagram/></Link>
                            <Link className="text-xl md:text-sm " href=""><FaTelegramPlane/></Link>
                        </li>
                    </ul>
                </div>


                <div className="flex flex-col  ">
                    <h2 className="font-medium text-[12px] md:text-[20px] mb-4">شعبه‌های ترخینه</h2>
                    <ul className="space-y-3 text-[14px]">
                        <li><Link href="">شعبه اکباتان</Link></li>
                        <li><Link href="">شعبه چالوس</Link></li>
                        <li><Link href="">شعبه اقدسیه</Link></li>
                        <li><Link href="">شعبه ونک</Link></li>
                    </ul>
                </div>


                <div className="hidden md:flex flex-col ">
                    <h2 className="font-medium text-[20px] mb-4">پیام به ترخینه</h2>
                    <form className="flex">
                        <div className="ml-5">
                            <input type="text" placeholder="نام و نام خانوادگی"
                                   className="w-[276px] h-[40px]  px-3 bg-transparent border border-[#717171] rounded-sm outline-none"/>
                            <input type="text" placeholder="شماره تماس"
                                   className="w-[276px] h-[40px] mt-4 px-3 bg-transparent border border-[#717171] rounded-sm outline-none"/>
                            <input type="text" placeholder="آدرس ایمیل (اختیاری)"
                                   className="w-[276px] h-[40px] mt-4 px-3 bg-transparent border border-[#717171] rounded-sm outline-none"/>
                        </div>
                        <div>
                            <textarea maxLength={200} value={text} onChange={(e) => setText(e.target.value)}
                                      placeholder="پیام شما"
                                      className="w-[286px] h-[144px] px-3 py-2 bg-transparent border border-[#717171] outline-0 rounded-sm resize-none"/>
                            <p className="text-left text-sm mr-auto">{text.length}/200</p>
                            <button type="submit" className="w-full h-[40px] border border-white rounded-sm hover:bg-white hover:text-black transition">
                                ارسال پیام
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
