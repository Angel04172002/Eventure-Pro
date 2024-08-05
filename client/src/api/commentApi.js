import requester from "./requester";



const baseUrl = 'http://localhost:3030/data/comments';

export const create = (eventId, text) => requester.post(baseUrl, { eventId, text });

export const getAll = (eventId) => {

    const params = new URLSearchParams({
        where: `eventId="${eventId}"`,
        load: `author=_ownerId:users`
    });

    return requester.get(`${baseUrl}?${params.toString()}`);
}

export default {
    create,
    getAll
}