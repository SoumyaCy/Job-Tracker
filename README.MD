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

- visit url http://localhost:3000/

### Concurrently

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
![Screenshot (4)](https://user-images.githubusercontent.com/56735635/188561265-5a7f2863-b20f-41be-819f-c9af749b4ebc.png)



# Register Page
![Screenshot (5)](https://user-images.githubusercontent.com/56735635/188560063-4ad2b060-5e6f-4dd2-9a17-bcbc05a52a1d.png)



# Add Job Page
![Screenshot (6)](https://user-images.githubusercontent.com/56735635/188560210-13e6fa2d-d746-42c4-a09b-32c1968a3ed0.png)


# Stats Page
![Screenshot (13)](https://user-images.githubusercontent.com/56735635/188595949-102c69dd-cd65-4b49-9630-9225dd711050.png)

