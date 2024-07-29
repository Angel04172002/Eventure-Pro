import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import EventListItem from "./event-list-item/EventListItem";
import eventApi from '../../api/eventApi';



export default function EventList() {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        eventApi.getAll()
            .then(result => {

                setEvents(result);
                setIsLoading(false);

            });
    }, []);



    return (
        <>

            <Row xs={1} md={2} className="g-4">

                {events.map(ev =>
                    <EventListItem
                        key={ev._id}
                        event={ev}
                    />
                )}

            </Row>
        </>
    )
}