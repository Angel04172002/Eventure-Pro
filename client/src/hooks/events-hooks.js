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

    const [eventInfo, setEventInfo] = useState({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        place: '',
        date: ''
    });

    useEffect(() => {

        eventApi.getOne(eventId)
            .then(result => {

                setEventInfo(result);

            });
    }, [eventId]);

    return [eventInfo];
}

export function useGetLatestEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        eventApi.getLatest()
            .then(result => {

                setEvents(result);
            });
    }, []);

    
    return [events];

}

export function useGetMineEvents(userId) {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        eventApi.getMine(userId)
            .then(result => {

                setEvents(result);
            });
    }, []);

    return [events];
}


export function useCreateEvent() {
    return eventApi.create;
}


