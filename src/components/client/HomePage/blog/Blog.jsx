"use client"
import React, {useState} from 'react';
import TitleHomeComponents from "@/components/client/shared/TitleHomeComponents";
import CardBlog from "@/components/client/HomePage/blog/module/CardBlog";
import {dataBlog} from "@/utils/DataMenu";
import PopupImage from "@/components/client/HomePage/blog/module/PopupImage";

function Blog(props) {
    const [popupImage, setPopupImage] = useState(false)

    return (
        <>

            <div className="flex flex-col items-center mb-10 ">
                <TitleHomeComponents title="ترخینه گردی"/>
                <div className="flex items-center justify-between flex-col md:flex-row ">
                    {
                        dataBlog.map((item) => <CardBlog setPopupImage={setPopupImage} key={item.id} data={item}/>)
                    }
                </div>
            </div>

            {
                popupImage && (
                    <PopupImage  setPopupImage={setPopupImage}/>
                )
            }
        </>
    );
}

export default Blog;