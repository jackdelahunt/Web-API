# Assignment 2 - Web API.

### Jack Delahunt - 20085409

## Features. 
 + Feature 1 - Logging to record requests to the server
 + Feature 2 - Post route for user favourites
 + Feature 3 - Delete route for user favourites
 + Feature 4 - Delete route for users

## Installation Requirements
Node must be configured on the local machine and so will MongoDB.

Clone the repo by entering the following:

```bat
git clone https://github.com/jackdelahunt/wad-api-labs-2020.git
```

Then install the necessary dependencies:

```bat
npm install
```

To create the local server run the *start* script:
```bat
npm start
```

## API Configuration
Create a ``.env`` file and place it in the **root** directory an example of how the enviroment can be setup is as follows:

```bat
NODE_ENV=development
PORT=8080
HOST=host location
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```
``development`` or ``production`` can be set to change how the API responds to requests. For example if an error is thrown in ``development`` it will return the stack trace of the error.

If *seedDb* is true then the database will be given dummy data on startup.


## API Design
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A| N/A | N/A  
| /api/users | Get a list of all users | Registers a user | Updates a users detials | N/A
| /api/users/{username} | Get user details | N/A | N/A | Delete a single user
| /api/users/{username}/favourites | Get a users favourites | Add a favourite to a user | N/A | Delete user favourite movie
## Security and Authentication
Authentication was managed with JWT with passport, user routes are protected and require BEARER tokens to be authenticated.

## Integrating with React App

React App Link - https://github.com/jackdelahunt/Neo-Movie-Viewer

In the react app an example of using this api can be seen here. This call gets all the movies stored in the database. Authorization is needed to make this request.
~~~Javascript
export const apiGetMovies = () => {
    return fetch(
      '/api/movies/',
      {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      }
    ).then(res =>res.json())
};
~~~
This call gets a specific movie in the database based on the id entered. Authorization is needed to make this request.
~~~Javascript
export const apiGetMovie = (id) => {
  return fetch(
    `/api/movies/${id}`
  ).then(res => res.json());
};
~~~

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

A logging system was added to record the request made to the api. The result of requests are stored in the Logs/log.txt file.

This is how that logging system works. It is called once a requests is heard on the port.
~~~Javascript
const Log = (req, res, next) => {
    const fs = require('fs');
    fs.appendFileSync("./Logs/logs.txt", JSON.stringify({
        "url": req.url,
        "Method": req.method,
        "Date": new Date().toLocaleString(),
        "Token": req.headers.authorization,
    }) + "\n");
    next();
}
~~~
