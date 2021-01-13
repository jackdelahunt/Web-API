# Assignment 2 - Web API.

Name: Your Name

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - .... a statement of its purpose/objective ..... 
 + Feature 2 - .......
 + Feature 3 = ......
 + etc
 + etc

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

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
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

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
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A| N/A | N/A  
| /api/users | Get a list of all users | Registers a user | Updates a users detials | N/A
| /api/users/{username} | Get user details | N/A | N/A | Delete a single user
| /api/users/{username}/favourites | Get a users favourites | Add a favourite to a user | N/A | N/A
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

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
