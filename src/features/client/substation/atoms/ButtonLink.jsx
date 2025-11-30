"use client";
import Link from "next/link";
import { MdOutlineEventNote } from "react-icons/md";

const ButtonLink = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="flex items-center justify-around font-bold border border-[#417F56] rounded-md text-[#417F56] w-[184px] m-auto h-[40px]"
        >
            <MdOutlineEventNote />
            <span className="text-[16px]">{text}</span>
        </Link>
    );
};

export default ButtonLink;
