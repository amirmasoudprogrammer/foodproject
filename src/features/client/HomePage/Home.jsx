import React from 'react';
import MenuFood from "@/features/client/HomePage/menu/MenuFood";
import Description from "@/features/client/HomePage/description/Description";
import Blog from "@/features/client/HomePage/blog/Blog";
import Slider from "@/shared/slider/Slider";

function Home(props) {
    return (
        <>
            <Slider/>
            <MenuFood/>
            <Description/>
            <Blog/>
        </>
    );
}

export default Home;