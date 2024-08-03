import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useRef, useState } from 'react';
import eventApi from '../../api/eventApi';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function EventCreate() {

    const [formValues, setFormValues] = useState({
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



    const changeHandler = (e) => {

        setFormValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    };

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

            <form method="post" className="edit-form" onSubmit={createEventHandler}>

                <div className="row mb-3">
                    <div className="form-group topic-div">
                        <label className="topic-label" htmlFor="exampleFormControlInput1">
                            Име
                        </label>
                        <input
                            name='title'
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={formValues.title}
                            onChange={changeHandler}
                            ref={eventFormInputRef}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group message-div">
                        <label className="comment-label" htmlFor="description">
                            Описание
                        </label>
                        <textarea
                            name="description"
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            value={formValues.description}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="form-group message-div">
                        <label className="comment-label" htmlFor="exampleFormControlInput1">
                            Изображение
                        </label>
                        <input
                            name='imageUrl'
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={formValues.imageUrl}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 form-group text-div">
                        <label className="text-label">Категория</label>

                        <select name="category" id="categorySelect" onChange={changeHandler}>

                            <option value="entertainment">Entertainment</option>
                            <option value="study">Studying</option>
                            <option value="science">Science</option>

                        </select>

                    </div>
                </div>


                <div className="row mb-3">
                    <div className="form-group message-div">
                        <label className="comment-label" htmlFor="exampleFormControlInput1">
                            Изображение
                        </label>
                        <input
                            name='place'
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={formValues.place}
                            onChange={changeHandler}
                        />
                    </div>
                </div>



                <div className="row mb-3">
                    <div className="form-group message-div">
                        <label className="comment-label" htmlFor="exampleFormControlInput1">
                            Дата
                        </label>
                        <input
                            name='dateInput'
                            type="date"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={formValues.date}
                            onChange={changeHandler}
                        />
                    </div>
                </div>



                <div className="col-10">
                    <input
                        id="submit-btn"
                        type="submit"
                        className="w-100 btn btn-primary"
                        defaultValue="Запази"
                    />
                </div>
            </form>


        </div>

    )
}