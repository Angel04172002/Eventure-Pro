import { useState, useEffect } from "react";
import eventApi from "../api/eventApi";

export function useGetAllEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        eventApi.getAll()
            .then(result => {

                setEvents(result);
            });
    }, []);

    return [events];
}


export function useGetOneEvent(eventId) {

    const [eventInfo, setEventInfo] = useState({});

    useEffect(() => {

        eventApi.getOne(eventId)
            .then(result => {

                setEventInfo(result);

            });
    }, []);

    return [eventInfo];
}


export function useCreateEvent() {

}

