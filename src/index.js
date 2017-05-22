import 'promise-polyfill'
import 'whatwg-fetch'

export const headers: Object = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
}

export function handleResponse(response: Object): Promise {
    return new Promise((resolve, reject) => {
        response.json()
            .then(data => response.status > 399 ? reject({ error: {
                status: response.status,
                message: response.statusText,
                errors: data,
            } }): resolve({ data }))
            .catch(() => reject({
                error: {
                    status: response.status,
                    message: `Unnable to parse response body`
                }
            }))
    })
}

export default class FetchToRequest {
    constructor(fetchOptions: Object = {}) {
        this._options = {
            headers,
            ...fetchOptions,
        };
    }

    get(url: string = '/', options: Object = {}): Promise {
        return window.fetch(url, {
            ...this._options,
            ...options,
            method: 'GET',
        }).then(response => handleResponse(response))
    }

    delete(url: string = '/', options: Object = {}): Promise {
        return window.fetch(url, {
            ...this._options,
            ...options,
            method: 'DELETE',
        }).then(response => handleResponse(response))
    }

    post(url: string = '/', data: Object = {}, options: Object = {}): Promise {
        return window.fetch(url, {
            ...this._options,
            ...options,
            body: JSON.stringify(data),
            method: 'POST',
        }).then(response => handleResponse(response))
    }

    put(url: string = '/', data: Object = {}, options: Object = {}): Promise {
        return window.fetch(url, {
            ...this._options,
            body: JSON.stringify(data),
            ...options,
            method: 'PUT',
        }).then(response => handleResponse(response))
    }

    patch(url: string = '/', data: Object = {}, options: Object = {}): Promise {
        return window.fetch(url, {
            ...this._options,
            ...options,
            body: JSON.stringify(data),
            method: 'PATCH',
        }).then(response => handleResponse(response))
    }
}
