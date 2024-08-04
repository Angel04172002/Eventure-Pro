import { useEffect, useState } from "react";
import categoryApi from "../api/categoryApi";


export function useGetAllCategories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        categoryApi.getAll()
            .then(result => {

                setCategories(result);
            });
    }, []);

    return [categories];
}

export function useCreateEvent() {
    return categoryApi.create;
}