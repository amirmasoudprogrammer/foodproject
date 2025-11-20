"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import CardFood from "@/features/client/substation/atoms/CardFood";
import { FaAngleLeft } from "react-icons/fa6";


const SliderContent = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", skipSnaps: false },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );


    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);


    const onSelect = useCallback((api) => {
        setPrevBtnDisabled(!api.canScrollPrev());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);


    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

    return (
        <div className="relative w-[352px] md:w-full  py-6 m-auto">


            <button onClick={scrollPrev} disabled={prevBtnDisabled} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white  w-[40px] h-[40px] rounded-lg flex items-center justify-center hover:text-white hover:bg-black/60 text-black transition"><FaAngleLeft /></button>


            <div ref={emblaRef} className="overflow-hidden" style={{ direction: "ltr" }}>
                <div className="flex">
                    {slides.map((item) => (
                        <motion.div
                            key={item.id}
                            className="flex-shrink-0 mr-10 "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <CardFood data={item} />
                        </motion.div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default SliderContent;
