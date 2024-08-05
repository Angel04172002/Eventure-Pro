import { useState } from "react";

export function useForm(initialValues, handler) {

    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {        

        setFormValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {

        e.preventDefault();
        
        handler(formValues);
        setFormValues(initialValues);
    }

    return {
        formValues,
        changeHandler,
        submitHandler
    };
}