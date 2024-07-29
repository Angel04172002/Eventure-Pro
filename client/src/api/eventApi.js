import requester from "./requester";



const baseUrl = 'http://localhost:3030/jsonstore';


export const getAll = async () => {

    const result = await requester.get(`${baseUrl}/events`);
    const events = Object.values(result);

    return events;
};

export const getOne = (eventId) => requester.get(`${baseUrl}/events/${eventId}`);


export default {
    getAll,
    getOne
}