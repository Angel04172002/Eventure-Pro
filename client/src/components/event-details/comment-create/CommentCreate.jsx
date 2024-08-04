import { useForm } from "../../../hooks/useForm";
import styles from './CommentCreate.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialValues = {
    text: ''
};

export default function CommentCreate() {

    const { formValues, changeHandler, submitHandler } = useForm(initialValues);

    return (
        <>

            <Form onSubmit={submitHandler} className={styles['comment-form']}>

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