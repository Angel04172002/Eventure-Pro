import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import EventListItem from "./event-list-item/EventListItem";
import eventApi from '../../api/eventApi';

import styles from './EventList.module.css';
import { useGetAllEvents } from '../../hooks/events-hooks';


export default function EventList() {

    // const [isLoading, setIsLoading] = useState(true);
    
    const [events] = useGetAllEvents();

    return (
        <>

            <h2 className= {styles['title']}>All events</h2>

            
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