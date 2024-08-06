import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllCategories } from '../../hooks/categories-hooks';
import { useForm } from '../../hooks/useForm';
import styles from './EventEdit.module.css';
import { useGetOneEvent } from '../../hooks/events-hooks';
import eventApi from '../../api/eventApi';


const initialValues = {
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    place: '',
    date: ''
};

export default function EventEdit() {

    const { eventId } = useParams();
    const navigate = useNavigate();
    const [event] = useGetOneEvent(eventId);

    const categories = useGetAllCategories();

    const { changeHandler, submitHandler, values } =
        useForm(Object.assign(initialValues, event), async (values) => {

            const updatedEvent = await eventApi.update(eventId, values);
            navigate(`/event/${eventId}/details`)
        });

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
                    <Form.Control type="text" value={values.title} name="title" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Description</Form.Label>
                    <Form.Control type="text" value={values.description} name="description" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Image URL</Form.Label>
                    <Form.Control type="text" value={values.imageUrl} name="imageUrl" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Category</Form.Label>
                    <Form.Select name="category" value={values.category} onChange={changeHandler} aria-label="Default select example">

                        {categories.map(c => <option key={c._id} value={c.text}>{c.text}</option>)}

                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Place</Form.Label>
                    <Form.Control type="text" value={values.place} name="place" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Date</Form.Label>
                    <Form.Control type="date" value={values.date} name="date" onChange={changeHandler} />
                </Form.Group>


                <Button className={styles['edit-btn']} variant="primary" type="submit">
                    Edit Event
                </Button>
            </Form>

        </div>
    )
}