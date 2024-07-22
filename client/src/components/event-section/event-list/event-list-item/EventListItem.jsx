import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './EventListItem.css';

export default function EventListItem({
    title,
    description,
    imageUrl
}) {

    return (
        <>
            <Col>
                <Card>
                    <Card.Img className='cardImg' variant="top" src= {imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>

                    <Button variant="primary">Open</Button>
                </Card>
            </Col>

        </>
    )
}