
# Utilities

The utilities in this library are custom functions to help you develop your web app.

### Importing Utils
```javascript
import Utils from '../utils'
```

## 1. Updating Components on Events
Your component may need to fetch data, make a network request, update something in the DOM after the component has mounted or rendered in the browser. In these `Util` functions, the`callback` function you passed will get triggered either when the component first mounts or when a state has been changed. 

### `Utils.onMount(callback)`
> Calls the `callback` function when the component first mounts.

In the code below, `fetchCountries` will be called when the component first mounts
```javascript
const db = Hooks.useDatabase('sample_countries', 'countries');
const [countries, setCountries] = React.useState([]);

const fetchCountries = async() => {
  const data = await db.fetchAll();
  setCountries(data);
}
Utils.onMount(fetchCountries);
```
### `Utils.onChange(callback, state)`
> Calls the `callback` function when the `state` changes. 

In the example below `fetchItem` will be called when there is a change to `selectedID`.
```javascript
const [selectedID, setSelectedID] = React.useState([]);
const [item, setItem] = React.useState();

const fetchItem = () => {
  const data = await db.findOne({ _id: selectedItemID });
  setItem(data)
}
Utils.onChange(fetchItem, selectedItem);
```

## 2. Making HTTP Requests
HTTP requests are sent from the client application to a server. The results of the requests are not immediately available as with normal function calls. Therefore, HTTP requests should be handled asynchronously. Use `await` to wait for the request to complete and return the results. The results will be an array of two items. The first is the `data` upon a successful request. The second item is an error object up on an unsuccessful request.

### `Utils.get(url, params)`
> Performs a HTTP GET request. Parameters are optional. 
```javascript
const [data, error] = await Utils.get('https://restcountries.com/v3.1/all');
```
### `Utils.post(url, body)`
> Performs a HTTP POST request. Sends the `body` data to the server.

```javascript
const url = `https://authentication.server.com/login`
const body = {
  email: 'test123@gmail.com',
  password 'supersecret',
}
const [data, error] = await Utils.post(url, body);
```

