const express = require("express");
const socketIo = require("socket.io");
const weatherProvider = require('./providers/weather-provider');
const sportsProvider = require('./providers/sports-provider');
const financeProvider = require('./providers/finance-provider');
const subscribeProvider = require('./providers/subscribers-provider');
const newsProvider = require('./providers/news-provider');
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const currentState = {
    currentNews: new newsProvider(),
    currentWeather: new weatherProvider('Beer sheva'),
    users: new subscribeProvider(),
    sportGame: new sportsProvider(),
    financeGraph: new financeProvider()
};

app.post('/subscribe', (req,res) => {
    const uid = currentState.users.addSubscribeUser(req.body.email);
    res.send(JSON.stringify({user_id: uid}));
});

app.use(express.static(path.join(__dirname, 'utils')));

const server = app.listen(4000, () =>{
});

const io = socketIo(server);

const dateUpdate = () => {
    let updateTime = new Date();
    let hour = updateTime.getHours();
    let minutes = updateTime.getMinutes();
    updateTime = hour + ':' + minutes;
    return updateTime;
}

io.on('connection', (socket) => {
    console.log(`made connection - ${socket.id}`);
    let updateTime = dateUpdate();
    const {currentNews,currentWeather, sportGame, financeGraph } = currentState;
    socket.emit('HandShake' , ({currentNews: currentNews.currentNews, currentWeather, sportGame, financeGraph, updateTime}));
});

const financeUpdate = setInterval(() => {
    currentState.financeGraph.addRandomValue();
    const {financeGraph} = currentState;
    io.emit('updateFinance', {financeGraph})
}, 300000) 
 

const sportsUpdate = setInterval(() => {
    currentState.sportGame.randomScore();
    const {sportGame} = currentState;
    io.emit('updateSports', {sportGame});
}, 1000);


const weaterInterval = setInterval(() => {
    currentState.currentWeather = new weatherProvider('Beer sheva');
    const {currentWeather} = currentState;
    let updateTime = dateUpdate(); 
    io.emit('updateWeather', {currentWeather, updateTime});
}, 14400000);


const NewsInterval = setInterval(() => {
    currentState.currentNews.nextArticle();
    const {currentNews} = currentState.currentNews;
    let updateTime = dateUpdate();
    io.emit('updateNews', {currentNews,updateTime});
}, 600000); 