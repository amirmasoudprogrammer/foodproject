import React from 'react';
import Slider from "@/components/client/HomePage/slider/Slider";
import MenuFood from "@/components/client/HomePage/menu/MenuFood";
import Description from "@/components/client/HomePage/description/Description";
import Blog from "@/components/client/HomePage/blog/Blog";

function Index(props) {
    return (
        <>
            <Slider/>
            <MenuFood/>
            <Description/>
            <Blog/>
        </>
    );
}

export default Index;