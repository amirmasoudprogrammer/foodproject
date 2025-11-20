
import { useEffect, useState } from "react";

const useDataFood = (data ) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        try {
            if (!data) {
                setError(" دیتا وجود نداره...");
                setLoading(false);
                return;
            }

            if (!data.recipes) {
                setError(" به مشکل برخوردیم.... ");
                setLoading(false);
                return;
            }

            //
            setRecipes(data.recipes);
            setLoading(false);

        } catch (err) {
            setError(err.message || "Something went wrong");
            setLoading(false);
        }
    }, [data]);

    return { recipes, loading, error };
};

export default useDataFood;
