import { useState } from "react";

export function useForm(initialValues) {

    const [formValues, setFormValues] = useState(initialValues);


    const changeHandler = (e) => {        

        setFormValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    };


    return {
        formValues,
        changeHandler
    };
}