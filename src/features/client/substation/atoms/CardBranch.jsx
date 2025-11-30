import React from 'react';
import {BiPhoneCall} from "react-icons/bi";
import {CiLocationOn} from "react-icons/ci";
import {LuClock} from "react-icons/lu";

function CardBranch() {


    return (
        <>
            <div className="hidden md:flex items-center justify-around w-full">
                <div className="flex flex-col items-center justify-center">
            <span className="text-[#353535] text-[32px] flex items-center justify-center h-8 ">
<BiPhoneCall/>
            </span>

                    <div className="text-[#353535] text-[14px] flex flex-col items-center mt-1">
                        <p className="mt-2">۰۲۱-۳۳۵۳۵۳۵۴</p>
                        <span className="mt-1">۰۲۱-۳۳۵۳۵۳۵۶</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
            <span className="text-[#353535] text-[32px] flex items-center justify-center h-8 ">
              <CiLocationOn/>
            </span>

                    <div className="text-[#353535] text-[14px] flex flex-col items-center mt-1">
                        <p className="mt-2">شهرک اکباتان، فاز ۳، مجتمع</p>
                        <span className="mt-1">تجاری کوروش، طبقه سوم</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center -mt-5">
            <span className="text-[#353535] text-[32px] flex items-center justify-center h-8 ">
<LuClock/>
            </span>

                    <div className="text-[#353535] text-[14px] flex flex-col items-center mt-1">
                        <p className="mt-2">همه‌روزه از ساعت ۱۲ الی ۲۳ </p>

                    </div>
                </div>
            </div>


            <div className="flex md:hidden flex-col w-full justify-between items-start">
                <div className="flex items-center justify-center mr-2">
            <span className="text-[#353535] text-[15px] flex items-center justify-center  ">
              <CiLocationOn/>
            </span>

                    <div className="text-[#353535] text-[10px] flex  items-center ">
                        <p className="">شهرک اکباتان، فاز ۳، مجتمع</p>
                        <span className="">تجاری کوروش، طبقه سوم</span>
                    </div>
                </div>

                <div className="flex items-start justify-start mt-5 w-full ">
                    <div className="flex  items-center justify-center mr-2">
                          <span className="text-[#353535] text-[15px] flex items-center justify-center  ">
<BiPhoneCall/>
            </span>

                        <div className="text-[#353535] text-[10px] flex flex-col items-center ">
                            <p className="">۰۲۱-۳۳۵۳۵۳۵۴</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center  mr-auto ml-5">
                        <span className="text-[#353535] text-[15px] flex items-center justify-center  ">
<LuClock/>
            </span>

                        <div className="text-[#353535] text-[10px] flex flex-col items-center ">
                            <p className="">همه‌روزه از ساعت ۱۲ الی ۲۳ </p>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default CardBranch;
