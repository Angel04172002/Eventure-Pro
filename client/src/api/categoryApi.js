import requester from "./requester";

const baseUrl = 'http://localhost:3030/data/categories';


export const getAll = async () => {

    const result = await requester.get(baseUrl);
    const categories = Object.values(result);

    return categories;
}


export const create = (text) => requester.post(baseUrl, text);

export default {
    getAll,
    create
}