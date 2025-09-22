import React from 'react';
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";


function Menu({children,label ,mr}) {
    return (
       <nav className={`text-black flex items-center justify-center ${mr}`}>
           <ul className="flex items-center justify-center">
               <li className="group relative flex items-center justify-center ">
                   <div className="flex items-center">
                       <Link className="text-md text-[#717171] ml-2" href="">{label}</Link>
                       <span className="transition-transform duration-300 group-hover:rotate-180">
                           <IoChevronDown size={15} />
                       </span>
                   </div>
                   <ul className="absolute top-8 shadow-md rounded-lg flex flex-col items-start justify-between text-sm w-[144px] h-[160px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                       {
                           children.map((item) =>(
                               <li key={item.id} className="w-[130px] font-normal mr-2 border-b border-[#EDEDED] last:border-b-0 px-3 py-2">
                                   <Link href={item.link}>{item.name}</Link>
                               </li>
                           ))
                       }
                   </ul>

               </li>
           </ul>
       </nav>
    );
}

export default Menu;