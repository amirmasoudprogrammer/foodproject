import React from 'react';
import Substation from "@/features/client/substation/Substation";
import getFoodData from "@/services/getFoodData";

export const revalidate = 259200;

export default async function Page() {
    const data = await getFoodData();


    return <Substation data={data} />;
}
