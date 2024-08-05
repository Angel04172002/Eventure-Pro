import requester from "./requester";


const baseUrl = 'http://localhost:3030/data/events';


export const getAll = async () => {

    const result = await requester.get(baseUrl);
    const events = Object.values(result);

    return events;
};

export const getOne = (eventId) => requester.get(`${baseUrl}/${eventId}`);

export const getMine = async (userId) => {

    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`
    });

    return requester.get(`${baseUrl}?${params.toString()}`);    
};

export const create = (data) => requester.post(baseUrl, data);


export default {
    getAll,
    getOne,
    getMine,
    create
};