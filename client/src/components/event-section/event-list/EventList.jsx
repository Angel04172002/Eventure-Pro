import EventListItem from "./event-list-item/EventListItem"
import Row from 'react-bootstrap/Row';

export default function EventList({
    events
}) {


    return (
        <>

            <Row xs={1} md={2} className="g-4">

                {events.map(ev =>
                    <EventListItem
                        key={ev._id}
                        event = {ev}
                    />
                )}

            </Row>
        </>
    )
}