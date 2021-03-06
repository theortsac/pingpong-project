var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const API_KEY = process.env.KEY;
const { MongoClient } = require("mongodb");
const MONGO_URL = process.env.URI;
const client = new MongoClient(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = client.db("PingPong");
const matches = database.collection("matches");
const players = database.collection("players");
const highestIdCollection = database.collection("highestId");
const express = require('express');
const app = express();
app.get('/addMatch', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = req.query.key;
        let winnerId = parseInt(req.query.winnerId);
        let loserId = parseInt(req.query.loserId);
        let winnerPoints = parseInt(req.query.winnerPoints);
        let loserPoints = parseInt(req.query.loserPoints);
        if (key == API_KEY) {
            const highestIds = yield highestIdCollection.findOne({ _id: 0 });
            if (winnerId != loserId && winnerId > 0 && loserId > 0 && winnerId <= highestIds["highestPlayerId"] && loserId <= highestIds["highestPlayerId"] && winnerPoints > 0 && loserPoints >= 0) {
                let Match = {
                    _id: highestIds["highestMatchId"] + 1,
                    winnerId: winnerId,
                    loserId: loserId,
                    winnerPoints: winnerPoints,
                    loserPoints: loserPoints
                };
                yield players.findOneAndUpdate({ _id: winnerId }, { $inc: { points: 1 } });
                const loserData = yield players.findOne({ _id: loserId });
                if (loserData["points"] > 0) {
                    yield players.findOneAndUpdate({ _id: loserId }, { $inc: { points: -1 } });
                }
                yield matches.insertOne(Match);
                yield highestIdCollection.findOneAndUpdate({ _id: 0 }, { $inc: { highestMatchId: 1 } });
                res.sendStatus(201);
                console.log(201);
            }
            else {
                res.sendStatus(400);
                console.log(400);
            }
        }
        else {
            res.sendStatus(403);
            console.log(403);
        }
    });
});
app.get('/addPlayer', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = req.query.key;
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        if (key == API_KEY) {
            if (!(yield players.findOne({ firstName: firstName, lastName: lastName }))) {
                const highestIds = yield highestIdCollection.findOne({ _id: 0 });
                let Player = {
                    _id: highestIds["highestPlayerId"] + 1,
                    points: 0,
                    firstName: firstName,
                    lastName: lastName
                };
                yield players.insertOne(Player);
                yield highestIdCollection.findOneAndUpdate({ _id: 0 }, { $inc: { highestPlayerId: 1 } });
                res.sendStatus(201);
                console.log(201);
            }
            else {
                res.sendStatus(400);
                console.log(400);
            }
        }
        else {
            res.sendStatus(403);
            console.log(403);
        }
    });
});
app.listen(5500);
console.log('Success! Application running at https://localhost:5500/ :)');
