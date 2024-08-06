import { useContext } from 'react'
import { useGetMineEvents } from '../../hooks/events-hooks'
import { AuthContext } from '../../contexts/AuthContext'
import Row from 'react-bootstrap/esm/Row';
import EventListItem from '../event-list-item/EventListItem';
import styles from './EventMine.module.css';

export default function EventMine() {

    const { userId } = useContext(AuthContext);
    const [events] = useGetMineEvents(userId);

    return (

        <>

            <h2 className={styles['title']}>My events</h2>

            <Row xs={1} md={2} className="g-4">

                {events.map(ev => <EventListItem key={ev._id} event={ev} />)}

                {events.length == 0 && <h2 style={{ fontSize: '2em' }}>No Events yet</h2>}

            </Row>

        </>
    )
}