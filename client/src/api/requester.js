
async function requester(method, url, data) {

    const options = {};

    if(method != 'GET') {
        options.method = method;
    };


    const user = localStorage.getItem('user');
    console.log(user)

    if(data) {

        options.headers = {
            'content-type': 'application/json'
        };

        options.body = JSON.stringify(data);
    };


    if(user) {
        options.headers['X-Authorization'] = user.accessToken;
    }


    const response = await fetch(url, options);
    const result = await response.json();

    
    if(response.ok == false) {
        throw result;
    }

    return result;
}


export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
}
