"use client"
import React from 'react';
import Slider from "@/shared/slider/Slider";
import SliderTemplate from "@/features/client/substation/templates/SliderTemplate";
import useDataFood from "@/features/client/substation/hooks/useDataFood";
import Errors from "@/shared/Spinners/Errors";
import Loading from "@/shared/Spinners/Loading";
import ButtonLink from "@/features/client/substation/atoms/ButtonLink";
import {BranchSliderData, DataSliders ,DataComments} from "@/utils/DataMenu";
import BranchSlider from "@/features/client/substation/templates/BranchSlider";
import SliderCommnts from "@/features/client/substation/templates/SliderComments";


function Substation({data}) {

    const {recipes, loading, error} = useDataFood(data)

    if (loading) return (<Loading/>);

    if (error) return (<Errors error={error}/>);

    return (
        <div>
            <Slider data={DataSliders}/>
            <SliderTemplate slides={recipes?.slice(0, 7) ?? []} background="#ffffff" name="پیشنهاد ویژه"/>
            <SliderTemplate slides={recipes?.slice(7, 15) ?? []} background="#315F41" name="غذاهای محبوب"/>
            <SliderTemplate slides={recipes?.slice(15, 22) ?? []} background="#ffffff" name="غذاهای غیر ایرانی"/>
            <ButtonLink href="" text="مشاهده منوی کامل"/>
            <BranchSlider data={BranchSliderData} name="شعبه اکباتان" />
            <SliderCommnts data={DataComments}/>

        </div>
    );
}

export default Substation;