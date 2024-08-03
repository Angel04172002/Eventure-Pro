import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useRef, useState } from 'react';
import eventApi from '../../api/eventApi';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './EventCreate.module.css'

import { useForm } from '../../hooks/useForm';


export default function EventCreate() {

    const { formValues, changeHandler } = useForm({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        place: '',
        date: ''
    });



    const eventFormInputRef = useRef();


    useEffect(() => {

        //eventFormInputRef.current.focus();

    }, []);



    const createEventHandler = (e) => {

        e.preventDefault();

        eventApi.create(formValues)
            .then(() => {

                console.log('created');

            });
    };

    return (

        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>


            <Form onSubmit={createEventHandler} className={styles['event-form']}>

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
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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