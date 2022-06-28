# Ping Pong Project
## Technologies Used:
- MongoDB
- React
- GraphQL
- Node
- Typescript  
To run the project you need to setup the Backend and the Frontend, here's a guide on how to do both:
## Backend
- When you `cd` into the `Backend` folder run the command `npm install` to install all the dependencies of this project.
- Set up a `MongoDB` cluster with [this](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup) tutorial
- Inside this cluster create a database named `PingPong` a collection named `highestId`, `players` and `matches`.
- Inside the `highestId` collection paste this document:
```
{
  _id: 0,
  highestMatchId: 0,
  highestPlayerId: 0
}
```
- Create a file named `.env` inside this folder
- Get your access URI from the website
- Fill this and paste inside the `.env` (the API can be whatever you want as long as it doesn't contain `&` or `=`)
```
URI = "yourAccessURI"
KEY = "apiKey"
```
- Run `npm run test` to see if it's working
- If you receive the message `Success! Application running at https://localhost:5500/ :)` it's working, congrats :)
## Front End
### We will follow presuming that you followed the steps on Backend already

- When you `cd` into the `ping-pong-react` folder run the command `npm install` and `yarn install` to install all the dependencies of this project.
- Use the API you configured at `Backend` three times, one for matches, two for players. The data can be whatever you want, as long as it creates two new players and a match.
- Go to [this](https://www.mongodb.com/docs/atlas/app-services/graphql/#how-app-services-creates-graphql-schemas) link and create a new app.
- Generate the GraphQL schema on the three collections, and add this code on the relationships field of the `matches` collection:
```
{
  "loserId": {
    "ref": "#/relationship/mongodb-atlas/PingPong/players",
    "foreignKey": "_id",
    "isList": false
  },
  "winnerId": {
    "ref": "#/relationship/mongodb-atlas/PingPong/players",
    "foreignKey": "_id",
    "isList": false
  }
}
```
- Allow and create an API key as a method of authentication on App services.
- Copy your GraphQL API link from App Services.
- Inside `codegen.yml` swap the `schema` link and `apiKey` to yours.
- Enable Anonymous authentication on App Services.
- On the main `index.tsx` file line 20, change the `uri` to your GraphQL API link.
- To run the app simply type `npm start`.

### With that you should be able to run your own database and API and add your own data to the database! Hope you had fun :)
## OBS: If you want to just read the info of my database, and not be able to add any data yourself, you can access the `ping-pong-react` folder, run `npm install`, `yarn install`, and to run the app `npm start`.