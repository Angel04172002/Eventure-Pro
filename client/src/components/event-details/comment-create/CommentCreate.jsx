import { useCreateComment } from "../../../hooks/comment-hooks";
import { useForm } from "../../../hooks/useForm";
import styles from './CommentCreate.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const initialValues = {
    text: ''
};

export default function CommentCreate({
    eventId,
    setComments
}) {

    const createComment = useCreateComment();

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, async ({ text }) => {

        try {

            const newComment = await createComment(eventId, text);
            setComments(oldState => [...oldState, newComment]);

        } catch (err) {

        }

    });


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