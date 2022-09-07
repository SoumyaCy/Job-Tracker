# Job Hunter
A React based web application to make your job search easier

## Description

This Application helps keep a track of upcoming Job applications. Equipped with a dashboard and personalized stats, one can keep track of their job applications,upcoming interviews, pending applications and monthly statistics.

You can add your applications, update them, remove them and easily navigate through them, the applications takes care of managing the applications while the 
user can focus on the upcoming jobs at hand.

## Key Features
* Login/Registration
   * Upon opening the application,it takes us to a landing page
   * From there we can go into the login/register page
   * Create an account with us or login to an already existing one
- Dashboard
   - Upon logging in you can view your job statistics
   - The pending applications,interviews and declined offers
- Search Page
  - Navigating through the job applications is easy and seemless
  - Search and filter options provided can easily help the user search for the required application
- Add/Update Job
  - To add job one can enter the job details along with the current status of the application
  - One can edit the job at any time by following the edit job button on each job
- Profile Page
  - User can create their own personal profile
 

### Local Installation & Set Up

```sh
npm run install-dependencies
```

- add .env file
- setup values for -PORT Number, MONGO_URL, JWT_SECRET, JWT_LIFETIME(optional)

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

