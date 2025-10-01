"use client"
import React, {useState} from 'react';
import TitleHomeComponents from "@/components/client/shared/TitleHomeComponents";
import CardMenuItem from "@/components/client/HomePage/menu/module/CardMenuItem";
import {DataMenu} from "@/utils/DataMenu";
import {CiSearch} from "react-icons/ci";

function MenuFood(props) {
    const [query, setQuery] = useState("");
    return (
        <>
            <div className="flex md:hidden rounded-lg items-center justify-between w-[320px] h-[32px] m-auto border border-[#CBCBCB] mt-5">
                <input  value={query} onChange={(e) => setQuery(e.target.value)}
                       type="search" placeholder="جستجو..." className="w-[409px] outline-0 text-black mr-2"/>
                <span className="text-black ml-2"><CiSearch/></span>
            </div>


        <div className="mt-30 mb-10">
            <TitleHomeComponents title="منوی رستوران"/>
         <div className="container m-auto
                grid grid-cols-2
                md:flex md:flex-wrap md:justify-between">
             {
                 DataMenu.map((item) => (
                     <CardMenuItem data={item} key={item.id}/>
                 ))
             }
         </div>
        </div>
        </>
    );
}

export default MenuFood;