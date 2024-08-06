import { useGetLatestEvents } from "../../hooks/events-hooks"

export default function Home() {

    const [events] = useGetLatestEvents();

    return (
        <>
            <h1>Welcome to Eventure Pro!</h1>
            <p>You can create, edit, update and delete events</p>

            <h2>Latest Events</h2>
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