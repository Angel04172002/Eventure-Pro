import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import eventApi from '../../api/eventApi';


export default function EventListItem({
    event
}) {

    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();

    const isOwner = userId == event._ownerId;

    const eventDeleteHandler = async () => {

        const isConfirmed = confirm(`Are you sure you want to delete ${event.title} event?`);

        if(!isConfirmed) {
            return;
        }

        try {

            await eventApi.remove(event._id);
            navigate('/');

        } catch(err) {
            console.log(err.message);
        }   
    }

    return (
        <>
            <Col>
                <Card>
                    <Card.Img className='cardImg' variant="top" src={event.imageUrl} />

                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                    </Card.Body>

                    {isOwner && (
                        <div style={{ display: 'flex', gap: '1em', margin: '0 auto', marginBottom: '0.7em' }}>
                            <Link style={{ fontSize: '1.6em' }} to={`/event/${event._id}/edit`} className='text-sm font-semibold leading-6 text-gray-900'>Edit</Link>
                            <a style={{ fontSize: '1.6em' }} onClick={eventDeleteHandler} className='text-sm font-semibold leading-6 text-gray-900'>Delete</a>
                        </div>
                    )}

                    <Link style={{ fontSize: '1.6em', marginTop: '0.6em' }} to={`/event/${event._id}/details`} className='text-sm font-semibold leading-6 text-gray-900'>Open</Link>

                </Card>
            </Col>

        </>
    )
}