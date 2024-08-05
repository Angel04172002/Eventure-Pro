import { useContext } from 'react'
import { useGetMineEvents } from '../../hooks/events-hooks'
import { AuthContext } from '../../contexts/AuthContext'
import Row from 'react-bootstrap/esm/Row';
import EventListItem from '../event-list-item/EventListItem';

export default function EventMine() {

    const { userId } = useContext(AuthContext);
    const [events] = useGetMineEvents(userId);


    return (

        <Row xs={1} md={2} className="g-4">

            {events.map(ev => <EventListItem key={ev._id} event={ev} />)}

        </Row>
    )
}