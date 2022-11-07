# Hooks.useAuth

`useAuth` is a custom hook that connects you to an authentication server for student projects. The user authentication data is encrypted and stored in the student project database.

## Getting Started

### `<AuthState>`
To use access user authentication from anywhere in your application you must first wrap your main `App` component with the `<AuthState>` component. Your code should already be wrapped by the `<AuthState>` component if you forked the template we provided.

IMPORTANT: You must set the database you want to use for authentication to your team database; otherwise, you will be sharing your user authentication with other teams. You can set the `<AuthState>` `database` prop in the `./src/index.jsx`  file.  


```javascript
import AuthState from './utils/auth/AuthState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthState database='team_x'>
      <App />
    </AuthState>
	</React.StrictMode>
)
```

### `Hooks.useAuth()`
After importing the `Hooks` library, call `Hooks.useAuth()` inside your component and save the return value as a `const`.

```javascript
import {Hooks} from '../utils'

export default function Countries() {
  const auth = Hooks.useAuth();
  ...
}
```


### Return Value

Calling `useAuth` will return an object with the following structure:
```js
{
  user: {email: string, token: string},
  error: Error, 
  signup: (email, password) => Promise, 
  login: (email, password) => Promise,  
  logout: (void) => void, 
}
```


## Properties

The object returned from calling `useDatabase` will have the following properties: 

### `user: {email: string, token: string}`
> The current logged in user credential which includes the user email and a JSON web token (JWT). The `user` property will be `null` if no user has logged in.

 The code below shows how to you can protect a component from showing when no user is logged in.
```javascript
const auth = Hooks.useAuth();

if (!auth.user) return;
```
### `error: Error`
> The error from the last authentication request or `null` if the request succeeded. Tip: Use the `ErrorAlert` component to debug authentication errors in your app.

## Authentication Functions

### `signup(email, password)`
> Sends email and password to authentication server, registers the user, and then logs the user in upon success.

```javascript
const auth = Hooks.useAuth();

const submit = (data) => { 
  auth.signup(data.email, data.password) 
};
```

###  `login(email, password)`
> Sends email and password to authentication server, and then logs the user in upon success.
```javascript
const auth = Hooks.useAuth();

const submit = (data) => { 
  auth.login(data.email, data.password) 
};
```

###  `logout()`
> Removes the user authentication credential
```javascript
<Button onClick={ () => { auth.logout() } }>
  Logout
</Button>
```
