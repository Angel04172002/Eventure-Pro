import Row from "react-bootstrap/esm/Row";
import styles from './Home.module.css';
import { useGetLatestEvents } from "../../hooks/events-hooks"
import EventListItem from "../event-list-item/EventListItem";

export default function Home() {

    const [events] = useGetLatestEvents();

    return (
        <>
            <h1 className= {styles['mainTitle']}>Welcome to Eventure Pro!</h1>
            <p className= {styles['description']}>You can create, edit, update and delete events</p>

            <h2 className={styles['eventsTitle']}>Latest Events</h2>


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