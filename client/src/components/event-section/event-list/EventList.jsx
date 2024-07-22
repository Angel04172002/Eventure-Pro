import EventListItem from "./event-list-item/EventListItem"


export default function EventList({
    events
}) {


    return (
        <>

            {events.map(ev =>
                <EventListItem
                    key={ev._id}
                    title={ev.title}
                    description={ev.description}
                    imageUrl={ev.imageUrl}
                />
            )}
        </>
    )
}