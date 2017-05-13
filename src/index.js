import 'promise-polyfill'
import 'whatwg-fetch'

export const headers: Object = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}

export function handleResponse(response: Object): Promise {
    return response.status > 399 ? Promise.reject(response.json()) : Promise.resolve(response.json())
}

export default class request {
    static get(url: string = '/', _headers: Object = {}): Promise {
        return fetch(url, {
            headers: { ...headers, ..._headers },
            method: 'GET',
        }).then(response => handleResponse(response))
    }

    static delete(url: string = '/', _headers: Object = {}): Promise {
        return fetch(url, {
            headers: { ...headers, ..._headers },
            method: 'DELETE',
        }).then(response => handleResponse(response))
    }

    static post(url: string = '/', data: Object = {}, _headers: Object = {}): Promise {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: { ...headers, ..._headers },
            method: 'POST',
        }).then(response => handleResponse(response))
    }

    static put(url: string = '/', data: Object = {}, _headers: Object = {}): Promise {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: { ...headers, ..._headers },
            method: 'PUT',
        }).then(response => handleResponse(response))
    }

    static patch(url: string = '/', data: Object = {}, _headers: Object = {}): Promise {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: { ...headers, ..._headers },
            method: 'PATCH',
        }).then(response => handleResponse(response))
    }
}