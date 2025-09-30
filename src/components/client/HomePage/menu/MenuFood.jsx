import React from 'react';
import TitleHomeComponents from "@/components/client/shared/TitleHomeComponents";
import CardMenuItem from "@/components/client/HomePage/menu/module/CardMenuItem";
import {DataMenu} from "@/utils/DataMenu";

function MenuFood(props) {

    return (
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
    );
}

export default MenuFood;