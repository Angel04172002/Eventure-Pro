import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css';
import { useForm } from '../../hooks/useForm';
import { useRegister } from '../../hooks/auth-hooks';




const initialValues = {
    email: '',
    password: '',
    rePassword: ''
};

export default function Register() {

    const [error, setError] = useState('');

    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({email, password, rePassword}) => {

        try {

            await register(email, password, rePassword);
            navigate('/');

        } catch (err) {
            return setError(err.message);
        }
    };


    const { formValues, changeHandler, submitHandler } = useForm(initialValues, registerHandler);


    return (
        <>
            <h2 className={styles['register-title']}>Register</h2>

            {error && (
                <p>{error}</p>
            )}

            <Form onSubmit={submitHandler} className={styles['register-form']}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Email address</Form.Label>
                    <Form.Control value={formValues.email} onChange={changeHandler} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['register-label']}>Password</Form.Label>
                    <Form.Control value={formValues.password} onChange={changeHandler} name="password" type="password" placeholder="Password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['register-label']}>Confirm Password</Form.Label>
                    <Form.Control value={formValues.rePassword} onChange={changeHandler} name="rePassword" type="password" placeholder="Password" />
                </Form.Group>


                <Button className={styles['register-btn']} variant="primary" type="submit">
                    Register
                </Button>
            </Form>

        </>
    )
}