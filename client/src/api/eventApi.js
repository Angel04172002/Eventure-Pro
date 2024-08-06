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

export const getLatest = async () => {

    const params = new URLSearchParams({
        sortBy: `_createdOn desc`,
        pageSize: 3
    });

    const result = await requester.get(`${baseUrl}?${params.toString()}`);
    return Object.values(result); 
}

export const create = (data) => requester.post(baseUrl, data);

export const update = (eventId, data) => requester.put(`${baseUrl}/${eventId}`, data);

export const remove = (eventId) => requester.del(`${baseUrl}/${eventId}`);


export default {
    getAll,
    getOne,
    getMine,
    getLatest,
    create,
    update,
    remove
};