import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './EventListItem.css';
import { Link } from 'react-router-dom';

export default function EventListItem({
    event
}) {


    return (
        <>
            <Col>
                <Card>
                    <Card.Img className='cardImg' variant="top" src={event.imageUrl} />
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>
                    </Card.Body>

                    <Link to= {`/event/${event._id}/details`} className='text-sm font-semibold leading-6 text-gray-900'>Open</Link>
                </Card>
            </Col>

        </>
    )
}