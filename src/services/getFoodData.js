import baseUrlApi from "@/constants/baseUrlApi";
import axios from "axios";

export default async function getFoodData() {
    try {
        const res = await axios.get(`${baseUrlApi}recipes`,);
        return res.data;
    } catch (error) {
        console.error("Error fetching food data:", error);
        return [];
    }
}
