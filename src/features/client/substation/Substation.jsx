"use client"
import React from 'react';
import Slider from "@/shared/slider/Slider";
import GreenSliderTemplate from "@/features/client/substation/templates/GreenSliderTemplate";
import WhiteSliderTemplate from "@/features/client/substation/templates/WhiteSliderTemplate";
import useDataFood from "@/features/client/substation/hooks/useDataFood";
import Errors from "@/shared/Spinners/Errors";
import Loading from "@/shared/Spinners/Loading";

function Substation({data}) {

    const {recipes, loading, error} = useDataFood(data)

    if (loading) return (<Loading/>);

    if (error) return (<Errors error={error} />);

    return (
        <div>
            <Slider/>
            <div className="">
                <WhiteSliderTemplate slides={recipes.slice(0, 7)} background="#ffffff" name="پیشنهاد ویژه"/>
                <GreenSliderTemplate slides={recipes.slice(7, 15)} background="#315F41" name="غذاهای محبوب"/>
                <WhiteSliderTemplate slides={recipes.slice(15, 22)} background="#fffff" name="غذاهای غیر ایرانی"/>
            </div>

        </div>
    );
}

export default Substation;