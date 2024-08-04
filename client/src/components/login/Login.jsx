import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Login.module.css';

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/auth-hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const initialValues = {
    email: '',
    password: ''
};

export default function Login() {

    const [error, setError] = useState('');

    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {

        try {

            await login(email, password);
            navigate('/');

        } catch (err) {
            return setError(err.message);
        }
    };

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, loginHandler);


    return (

        <>
            <h2 className={styles['login-title']}>Login</h2>

            {error && (
                <p>{error}</p>
            )}

            <Form onSubmit={submitHandler} className={styles['login-form']}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Email address</Form.Label>
                    <Form.Control type="text" value={formValues.email} name="email" onChange={changeHandler} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['form-label']}>Password</Form.Label>
                    <Form.Control value={formValues.password} name="password" onChange={changeHandler} type="password" placeholder="Password" />
                </Form.Group>

                <Button className={styles['login-btn']} variant="primary" type="submit">
                    Login
                </Button>
            </Form>

        </>

    )
}