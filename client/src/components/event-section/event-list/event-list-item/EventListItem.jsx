import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './EventListItem.css';

export default function EventListItem({
    event
}) {


    return (
        <>
            <Col>
                <Card>
                    <Card.Img className='cardImg' variant="top" src= {event.imageUrl} />
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>
                    </Card.Body>

                    <Button variant="primary">Open</Button>
                </Card>
            </Col>

        </>
    )
}