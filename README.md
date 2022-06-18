backend vacancy project
<br/>

[visit vacancy](https://ton-vacancy.vercel.app/)

## install _dependencies_

```bash
yarn add express mongoose cookie-parser express-session dotenv  joi jsonwebtoken nodemailer bcrypt
```

## install _devDependencies_

```bash
yarn add nodemon -dev
```

## create & run server

- import express
- run server on port (5000)
  <br/>

## folder structure

- config/index.js
- constants/index.js
- controlers/index.js
- middlewares/index.js
- models/index.js
- routers/index.js
- services/index.js
- utils/index.js
- validation/index.js
  <br/>

## connect mongoDB

- create new mongoDB database
  <br/>

## User

#### routes

- /create
  <br/>
- /delete:id
  <br/>
- /signin
  <br/>
- /signout
  <br/>
- /get:id
  <br/>
- /get
  <br/>
- /update:id
  <br/>
- /confirm
  <br/>
- /forget
  <br/>
- /upload (images,files ...)
  <br/>

#### module

- create shema of user
  <br/>

#### validation

- create validation shema of user
  <br/>

#### controller & middleware

- create
  -- check if the user exist
  -- vlidate data by joi (middleware)
  -- save in DB
  -- send code verificatioon in email
  <br/>
- delete
  -- check if user is authenticate (middleware)
  -- check if the user exist
  -- delete the user & clear the cookies
  <br/>
- signin
  -- validate data (middleware)
  -- check if the user exist
  -- send the cookie
  <br/>
- signout
  -- clear the cookie
  <br/>
- get one
  -- get the user by id
  <br/>
- get all
  -- get all user by category
  <br/>
- update
  -- check if user is authenticate (middleware)
  -- validate the new data (middleware)
  -- update user profile
  <br/>
- confirm
  -- valide data (middleware)
  -- compare the code validation
  -- change user status from 'Pending' to 'Active'
  <br/>
- upload
  -- check if user is authenticate (middleware)
  -- validate the file/image size
  -- save file/image on cloude
  -- recive the public_id & secure_url from response & save it in DB
  <br/>
- forget
  -- check the user info is correct (email, name, username, phone...)
  -- send email with code verification
  <br/>

## vacancy

#### routes

- /create
  <br/>
- /delete:id
  <br/>
- /get:id
  <br/>
- /get
  <br/>
- /update:id
  <br/>

#### module

- create vacancy shema
  <br/>

#### validation

- create validation shema of vacancy
  <br/>

#### controller & middleware

- create
  -- vlidate data by joi (middleware)
  -- save the vacancy in DB
  <br/>
- delete
  -- check if user is authenticate (middleware)
  -- check if the vacancy exist
  -- check if the vacancy created by this user
  -- remove the vacancy from DB
  <br/>
- get one
  -- get the vacancy by id
  <br/>
- get all
  -- get all vacancies by category
  <br/>
- update
  -- check if user is authenticate (middleware)
  -- validate the new data (middleware)
  -- check if the vacancy exist
  -- check if the vacancy created by this user
  -- update the vacancy
  <br/>

# companies

## routes

- /create
  <br/>
- /delete:id
  <br/>
- /signin
  <br/>
- /signout
  <br/>
- /get:id
  <br/>
- /get
  <br/>
- /update:id
  <br/>
- /confirm
  <br/>
- /forget
  <br/>
- /upload (images,files ...)
  <br/>

## model

- create vacancy shema
  <br/>

#### validation

- create validation shema of user
  <br/>

#### controller & middleware

- create
  -- vlidate data by joi (middleware)
  -- save the company in DB
  <br/>
- delete
  -- check if user is authenticate (middleware)
  -- check if the company exist
  -- check if the company created by this user
  -- remove the company from DB
  <br/>
- get one
  -- get the company by id
  <br/>
- get all
  -- get all company by category
  <br/>
- update
  -- check if user is authenticate (middleware)
  -- validate the new data (middleware)
  -- check if the company exist
  -- check if the company created by this user
  -- update the company
  <br/>
