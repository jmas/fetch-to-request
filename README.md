[![Build Status](https://travis-ci.org/salikovpro/fetch-to-request.svg?branch=master)](https://travis-ci.org/salikovpro/fetch-to-request)

# [fetch-to-request](https://www.npmjs.com/package/fetch-to-request)
Browser fetch wrapper

### Installation
```bash
npm install --save fetch-to-request
```

### Basic example
```javascript
import request from 'fetch-to-request'

request.get('http://example.com')
	.then(response => console.log(response)) // response as JSON
	.catch(error => console.log(error)) // error object { status, message }

```

### API
```javascript
request.get(url, headers) // GET request
request.delete(url, headers) // DELETE request
request.post(url, data, headers) // POST request with data object
request.put(url, data, headers) // PUT request with data object
request.patch(url, data, headers) // PATCH request with data object
```
