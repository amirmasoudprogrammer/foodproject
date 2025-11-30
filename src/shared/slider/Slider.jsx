"use client"

import React, {useCallback, useEffect, useState} from "react"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import {SlArrowRight} from "react-icons/sl";
import {SlArrowLeft} from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";


export default function Slider({data}) {

    const OPTIONS = {loop: true, duration: 5}
    const SLIDES = [1, 2, 3]
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        onSelect()
        const interval = setInterval(() => emblaApi.scrollNext(), 3000)
        return () => clearInterval(interval)
    }, [emblaApi, onSelect])


    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className="embla  relative w-full h-[336px] ">

            <div className="embla__viewport  w-full h-full overflow-hidden" ref={emblaRef}>
                <div className="embla__container w-full h-full relative">
                    {data?.map((item) => (
                        <div key={item.id}
                             className="embla__slide  flex items-center justify-between w-full h-full relative">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt="image"
                                    width={1440}
                                    height={336}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/60"></div>
                            </div>
                            <div
                                className=" absolute h-[200px] m-auto left-0 right-0 flex flex-col items-center m-auto justify-center">
                                <span className="text-[16px] md:text-[40px]">{item.label}</span>
                                {
                                    item.label && (<Link className="w-[91px] h-[24px] text-[10px] md:text-lg md:w-[184px] md:h-[40px] mt-10 bg-[#417F56] rounded-lg text-center flex items-center justify-center" href="">سفارش آنلاین غذا</Link>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div onClick={scrollPrev} className='hidden absolute bottom-0 md:flex items-center justify-between m-auto top-0 text-[20px] mr-10 cursor-pointer'>
                <SlArrowRight/>
            </div>
            <div onClick={scrollNext} className="hidden absolute bottom-0 left-0 md:flex items-center justify-between m-auto top-0 text-[20px] ml-10 cursor-pointer">
                <SlArrowLeft/>

            </div>

            {
                data?.some(item => item.label) && (<div className="absolute bottom-0 w-[154px] h-[33px] bg-[url('/image/Rectangle2.svg')] bg-cover bg-center rounded-t-3xl left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    i === selectedIndex ? "bg-[#417F56]" : "bg-[#ADADAD]"
                                }`}
                                onClick={() => scrollTo(i)}
                            />
                        ))}
                    </div>)
            }
        </div>
    )
}
