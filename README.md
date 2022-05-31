backend vacancy project
<br/>

[visit vacancy](https://ton-vacancy.vercel.app/)

## install dependencies

## 1 run server

- 1 install express js
  <br/>
  ```bash
  yarn add express
   mongoose cookie-parser express-session dotenv express-async-handler joi jsonwebtoken nodemailer bcrypt
  ```
  or
  ```bash
  npm i express mongoose cookie-parser express-session dotenv express-async-handler joi jsonwebtoken nodemailer bcrypt
  ```
- 2 run server on port 5000
- 3 add home route in the index.js file
  <br/>

## 2 create folders

- 1 controlers
- 2 models
- 3 middlewares
- 4 joiValidation
- 5 routers
- 6 mongoDB
- 7 utils
  <br/>

## 3 use mongoDB database

- 1 install moongose
  yarn add moongose
- 2 import mongo connect module
- 3 connect mongoDB
  <br/>

## 4 add signup user route

- 1 create signup route in routers folder
- 2 check the request data is valide
- 3 check the user if already exist
- 4 hashign the password by bcrypt.hash and push it to user data
- 5 save user in database
- 6 send verification email to avoid fake users
- 7 import and export signup route in index.js file in the same folder
  <br/>

## 5 add confirm email route

- 1 get the code and user id from url params
- 2 check if the user is exist in database
- 3 check the confirmation code is validet
- 4 save the status of user account in database and delete confirm code
- 5 import and export signup route in index.js file in the same folder
  <br/>

# 6 add delete user route

- 1 check the cookies if user already signed in /middleware
- 2 get the user id by decodet cookies
- 3 check the user if exist in database
- 4 delete the user from database
  <br/>

# 7 add signin user route

- 1 check the cookies if user already signed in /middleware
- 2 if signed in redirect to home route
- 3 get the user email and password from request
- 4 check if user exist
- 5 compare the password using bcrypt.compare
- 6 create a new cookie and send it to browser
- 7 redirect to home route
  <br/>

# 8 add signout user route

- 1 check the cookies if user already signed in /middleware
- 2 clear the cookie from client browser
- 3 redirect to signin route

<br/>
<br/>
<br/>
<br/>
