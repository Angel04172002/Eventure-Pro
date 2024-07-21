import { useEffect } from "react";
import EventList from "./event-list/EventList";
import EventCreate from "./event-create/EventCreate";



const baseUrl = 'http://localhost:3030/jsonstore';


export default function EventSection() {

    const [events, setEvents] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {

        (async function getAll() {

            const response = await fetch(`${baseUrl}/events`);
            const result = await response.json();

            const events = Object.values(result);

            
            setEvents(events);
            isLoading(false);

        })();
    }, []);


    return (

        <>
            <h2>Events</h2>

            {!isLoading && <EventList events={events} />}

            <EventCreate />

        </>

    )
}