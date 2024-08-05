import { useEffect, useState } from "react";
import commentApi from "../api/commentApi";

export function useCreateComment() {

    const createHandler = (eventId, comment) => {
        return commentApi.create(eventId, comment)
    };

    return createHandler;
}

export function useGetAllComments(eventId) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        commentApi.getAll(eventId)
            .then(result => {

                setComments(result);
            });

    }, [eventId]);

    
    return [comments, setComments];
}