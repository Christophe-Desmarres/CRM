# CRM

Works with node.js(Express), MongoDB and React

## Backend

- create mongoDB database (name 'CRM' with collections 'user' and 'customer' )
- create .env file in /config/
- set .env file
  - PORT=5000 localhost port
  - CLIENT_URL=http://localhost:3000 client URL
  - DB_USER_PASS=dbusername:dbpassword username and password database acces
  - TOKEN_SECRET=xxxxxxxxxx... random secret key
- `npm i` to install dependencies
- `nmp start` to launch server


## Frontend

- `cd client` + `npm start` to launch frontend
- create .env file in project root
- set .env file
  - REACT_APP_API_URL=http://localhost:5000/ server URL
