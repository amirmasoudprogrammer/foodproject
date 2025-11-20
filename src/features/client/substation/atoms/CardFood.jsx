import React from 'react';
import Image from "next/image";
import {FaRegHeart} from "react-icons/fa6";
import {MdStarRate} from "react-icons/md";


function CardFood({data}) {
    const {image, name, rating, caloriesPerServing, cookTimeMinutes} = data

    return (
        <div
            className="w-[168px] h-[231px] md:w-[288px] md:h-[433px] flex flex-col items-center justify-between shadow-xl border border-slate-300 rounded-md bg-white">
            <div>
                <Image
                    src={image}
                    alt="image"
                    width={288}
                    height={256}
                    className="object-cover w-[168px] h-[109px] md:w-[288px] md:h-[256px] rounded-t-md"
                />
            </div>
            <div className="flex flex-col w-full">
                <p className="mt-1 md:mt-0 text-black font-bold text-[12px] md:text-[15px] m-auto">{name}</p>
                <div className="flex justify-between mt-4 mx-3 md:mx-5 ">
                    <div className="flex items-center">
                        <p className="text-red-600 text-[10px] text-center flex justify-center items-center pt-2 bg-red-300 w-[32px] h-[16px] pb-1 text-center rounded-full">%{cookTimeMinutes}</p>
                        <span className="text-[#ADADAD] text-[12px] ml-2 line-through">
  {caloriesPerServing}
      </span>

                    </div>
                    <div className="flex items-center text-[#ADADAD] cursor-pointer">
                        <span className="text-[10px] mr-2 hidden md:block">افزودن به علاقمندی‌ها</span>
                        <FaRegHeart/>

                    </div>

                </div>
                <div className="mt-2 mx-3 md:mx-5 flex items-center justify-between">
                    <div className="flex text-[10px] md:text-[14px] text-[#353535] font-medium">
                        <p>تومان</p>
                        <span className="ml-1 ">209,000</span>

                    </div>
                    <div className="flex items-center justify-center">
                        <span className="text-black font-bold text-[10px] md:text-[14px] md:mr-2">{rating}</span>
                        <p className="text-[#F4B740] mb-1"><MdStarRate/></p>

                    </div>
                </div>
            </div>
            <div className="w-[152px] h-[32px] md:w-[256px] md:h-[40px] cursor-pointer hover:bg-green-700 hover:text-white hover:font-bold mb-4 rounded-sm md:rounded-md bg-[#417F56] flex items-center justify-center font-bold">
                <p className="text-[10px] md:text-[16px]">افزودن به سبد خرید</p>
            </div>

        </div>
    );
}

export default CardFood;