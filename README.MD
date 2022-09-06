# Job Hunter
A web application to make your job search easier

### Local Installation & Set Up

```sh
npm run install-dependencies
```

- add .env file
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```
```sh
- visit url http://localhost:3000/
```
#### Concurrently

- front-end and backend (server)
- run separate terminals
- [concurrently](https://www.npmjs.com/package/concurrently)

```sh
npm install concurrently --save-dev

```

- package.json

```js
// --kill-others switch, all commands are killed if one dies
// --prefix client - folder
// cd client && npm start
// escape quotes

"scripts": {
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  },
```

# Landing Page
![image]("C:\Users\USER\Pictures\Screenshots\Screenshot (4).png")



# Register Page
![image]("C:\Users\USER\Pictures\Screenshots\Screenshot (5).png")



# Add Job Page
![image]("C:\Users\USER\Pictures\Screenshots\Screenshot (6).png")
