# [fetch-to-request](https://www.npmjs.com/package/fetch-to-request)
Browser fetch wrapper

### Installation
```bash
npm install --save fetch-to-request
```

### Usage
```javascript
import request from 'fetch-to-request'

request.get('http://example.com')
	.then(response => console.log(response)) // response as JSON
	.catch(error => console.log(error)) // error object { status, message }

```
