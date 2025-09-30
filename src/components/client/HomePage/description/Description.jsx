import React from 'react';
import Link from "next/link";
import {GoChevronLeft} from "react-icons/go";
import {FaRegUser} from "react-icons/fa";
import {TbHomeHeart} from "react-icons/tb";
import {GiDiagram} from "react-icons/gi";
import {FaRegClipboard} from "react-icons/fa";


function Description(props) {
    return (
        <div className="relative flex items-center md:items-start justify-center md:justify-between flex-col md:flex-row pt-20 md:pr-20 w-full h-[500px] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/image/bannerDesc.jpg')] bg-cover bg-center mt-32 ">
            <div className="w-[320px] md:w-[600px] h-[167px] md:h-[238px] text-white">
                <span className="text-[16px] md:text-[24px]">رستوران‌های زنجیره‌ای ترخینه</span>
                <p className="text-[10px] md:text-[21px] mt-5 font-thin">
                    مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار
                    مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه
                    معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                </p>
                <Link href=""
                      className="md:mr-auto m-auto mt-5 text-[12px] md:text-lg flex items-center justify-center rounded-lg gap-2 border border-white w-[152px] h-[32px] md:w-[184px] md:h-[40px]">
                    اطلاعات بیشتر
                    <GoChevronLeft/>
                </Link>
            </div>
            <div className="w-[320px] md:w-[392px] h-[280px]  md:ml-20 grid grid-cols-2 items-center justify-center">
                <div className="flex items-center flex-col justify-center">
                    <span className="text-[35px]">
                        <FaRegUser/>
                    </span>
                    <span className="text-[11px] mt-2">پرسنلی مجرب و حرفه‌ای</span>
                </div>
                <div className="flex items-center flex-col justify-center">
                     <span className="text-[35px]">
                        <GiDiagram/>
              </span>
                    <span  className="text-[12px] mt-2">کیفیت بالای غذاها</span>
                </div>
                <div className="flex items-center flex-col justify-center">
                    <span className="text-[35px]">
                               <TbHomeHeart/>
                    </span>
                    <span className="text-[12px] mt-2">محیطی دلنشین و آرام</span>
                </div>
                <div className="flex items-center flex-col justify-center">
                   <span className="text-[35px]">
                        <FaRegClipboard/>
                   </span>
                    <span className="text-[12px] mt-2">منوی متنوع</span>
                </div>
            </div>
        </div>

    );
}

export default Description;