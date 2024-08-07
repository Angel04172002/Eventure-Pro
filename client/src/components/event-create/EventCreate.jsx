import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './EventCreate.module.css'

import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useCreateEvent } from '../../hooks/events-hooks';
import { useGetAllCategories } from '../../hooks/categories-hooks';


const initialValues = {
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    place: '',
    date: ''
};

export default function EventCreate() {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createEvent = useCreateEvent();
    const [categories] = useGetAllCategories();


    const createEventHandler = async (values) => {

        try {

            await createEvent(values);
            navigate('/');

        } catch (err) {
            return setError(err);
        }

    };

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, createEventHandler);





    return (


        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>


            <h2 className={styles['form-title']}>Create Event</h2>


            {error && (
                <p>{error}</p>
            )}

            <Form onSubmit={submitHandler} className={styles['event-form']}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Title</Form.Label>
                    <Form.Control type="text" value={formValues.title} name="title" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Description</Form.Label>
                    <Form.Control type="text" value={formValues.description} name="description" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Image URL</Form.Label>
                    <Form.Control type="text" value={formValues.imageUrl} name="imageUrl" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Category</Form.Label>
                    <Form.Select name="category" value={formValues.category} onChange={changeHandler} aria-label="Default select example">

                        {categories.map(c => <option key={c._id} value={c.text}>{c.text}</option>)}

                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Place</Form.Label>
                    <Form.Control type="text" value={formValues.place} name="place" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Date</Form.Label>
                    <Form.Control type="date" value={formValues.date} name="date" onChange={changeHandler} />
                </Form.Group>


                <Button className={styles['create-btn']} variant="primary" type="submit">
                    Create Event
                </Button>
            </Form>

        </div>

    )
}