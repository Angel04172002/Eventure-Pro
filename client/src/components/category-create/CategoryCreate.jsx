import { useState } from "react";

import styles from './CategoryCreate.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useCreateCategory } from "../../hooks/categories-hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

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
            navigate('/event/create');

        } catch (err) {
            return setError(err.message);
        }

    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, categoryCreateHandler);


    return (
        <>
            <h2 className= {styles['form-title']}>Create Category</h2>

            <Form onSubmit={submitHandler} className={styles['category-form']}>

                {error && (
                    <p>{error}</p>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Category</Form.Label>
                    <Form.Control as="textarea" value={formValues.text} name="text" onChange={changeHandler} />
                </Form.Group>

                <Button className={styles['create-btn']} variant="primary" type="submit">
                    Create Category
                </Button>
            </Form>

        </>
    )
}