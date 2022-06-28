require('dotenv').config();

const API_KEY = process.env.KEY;

const { MongoClient } = require("mongodb");
const MONGO_URL = process.env.URI;
const client = new MongoClient(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const database = client.db("PingPong");
const matches = database.collection("matches");
const players = database.collection("players");
const highestIdCollection = database.collection("highestId");

const express = require('express');
const app = express();

type Match = {
  _id: number;
  winnerId: number;
  loserId: number;
  winnerPoints: number;
  loserPoints: number;
}

type Player = {
  _id: number;
  points: number;
  firstName: string;
  lastName: string;
}

app.get('/addMatch', async function(req,res) {
  const key = req.query.key;
  let winnerId = parseInt(req.query.winnerId);
  let loserId = parseInt(req.query.loserId);
  let winnerPoints = parseInt(req.query.winnerPoints);
  let loserPoints = parseInt(req.query.loserPoints);
  if (key == API_KEY) {
    const highestIds = await highestIdCollection.findOne({_id: 0});
    if (winnerId != loserId && winnerId > 0 && loserId > 0 && winnerId <= highestIds["highestPlayerId"] && loserId <= highestIds["highestPlayerId"] && winnerPoints > 0 && loserPoints >= 0)
    {
      let Match: Match = {
        _id: highestIds["highestMatchId"] + 1,
        winnerId: winnerId,
        loserId: loserId,
        winnerPoints: winnerPoints,
        loserPoints: loserPoints
      }
      await players.findOneAndUpdate({_id: winnerId}, {$inc: {points: 1}});
      const loserData = await players.findOne({_id: loserId});
      if (loserData["points"] > 0)
      {
        await players.findOneAndUpdate({_id: loserId}, {$inc: {points: -1}});
      }
      await matches.insertOne(Match);
      await highestIdCollection.findOneAndUpdate({_id: 0}, {$inc: {highestMatchId: 1}});
      res.sendStatus(201);
      console.log(201);
    } else {
      res.sendStatus(400);
      console.log(400);
    }
  } else {
    res.sendStatus(403);
    console.log(403);
  }
});

app.get('/addPlayer', async function(req, res)
{
  const key = req.query.key;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  if (key == API_KEY) {
    if (!(await players.findOne({firstName: firstName, lastName: lastName}))) {
      const highestIds = await highestIdCollection.findOne({_id: 0});
      let Player: Player = {
        _id: highestIds["highestPlayerId"] + 1,
        points: 0,
        firstName: firstName,
        lastName: lastName
      }
      await players.insertOne(Player);
      await highestIdCollection.findOneAndUpdate({_id: 0}, {$inc: {highestPlayerId: 1}});
      res.sendStatus(201);
      console.log(201);
    } else {
      res.sendStatus(400);
      console.log(400);
    }
  } else {
    res.sendStatus(403);
    console.log(403);
  }
})

app.listen(5500);
console.log('Success! Application running at https://localhost:5500/ :)');