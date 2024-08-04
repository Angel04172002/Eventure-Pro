import { useState } from "react";
import { useForm } from "../../../hooks/useForm";

import styles from './CategoryCreate.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateCategory } from "../../hooks/categories-hooks";
import { useNavigate } from "react-router-dom";

const initialValues = {
    text: ''
};

export default function CategoryCreate() {

    const [error, setError] = useState('');


    const createCategory = useCreateCategory();
    const navigate = useNavigate();

    const categoryCreateHandler = async () => {

        try {

            await createCategory(formValues);
            navigate('/');

        } catch (err) {
            return setError(err.message);
        }

    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, categoryCreateHandler);


    return (
        <>

            <Form onSubmit={submitHandler} className={styles['category-form']}>

                {error && (
                    <p>{error}</p>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Comment</Form.Label>
                    <Form.Control as="textarea" value={formValues.text} name="text" onChange={changeHandler} />
                </Form.Group>

                <Button className={styles['create-btn']} variant="primary" type="submit">
                    Create Comment
                </Button>
            </Form>

        </>
    )
}