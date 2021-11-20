# EvolvU Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Development Mode

If you'd like to test out the frontend with the backend locally without Docker, then please visit the server folder to see the correct configurations. Please note that it is recommended to compile the application with Docker-Compose. Below are the settings required for testing both the frontend and backend locally:

Visit `index.js` in the `src` directory and change the current settings: 

```javascript
axios.defaults.baseURL = '';
axios.defaults.headers.common['Credentials'] = 'same-origin';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

To the following settings: 

```javascript
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

The current configuration with Docker-Compose uses Nginx as a reverse proxy, and so the `same-origin` headers are required for any API calls to the backend. 

## Available Routes

To see all of the available pages on the application, please visit `src/routes` to see all of the pages and their respective components. Note that protected pages require authentication via login to view. 

## Redux

This application uses Redux. If you are unfamiliar with it, then please visit [Redux](#https://redux.js.org/) to learn more. It is highly recommend to install Redux Devtools, either the Browser Extension or configuring it in the Redux Store. 
