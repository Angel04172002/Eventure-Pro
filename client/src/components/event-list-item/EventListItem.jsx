import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


export default function EventListItem({
    event
}) {

    const { userId } = useContext(AuthContext);
    const isOwner = userId == event._ownerId;

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
                            <Link style={{ fontSize: '1.6em' }} to={`/event/${event._id}/delete`} className='text-sm font-semibold leading-6 text-gray-900'>Delete</Link>
                        </div>
                    )}

                    <Link style={{ fontSize: '1.6em', marginTop: '0.6em' }} to={`/event/${event._id}/details`} className='text-sm font-semibold leading-6 text-gray-900'>Open</Link>

                </Card>
            </Col>

        </>
    )
}