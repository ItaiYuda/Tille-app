import React, {Component} from 'react';
import socketIOCilent  from 'socket.io-client';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';
import HomePage from './components/Home/HomePage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      news: {
        news: null,
        updateTime: null
      } ,
      weather: {
        weather: null,
        updateTime: null
      },
      finance: null,
      sports: null,
      reload: false
    }
    this.socket = socketIOCilent('http://localhost:4000/');
  }

  componentDidMount = () => {
    this.socketListener();
  }

  socketListener = () => {
    const {socket } = this
    socket.on('HandShake' ,(data ) => {
      this.setState({
        news: {
          news: data.currentNews,
          updateTime: data.updateTime
        },
        weather: {
          weather: data.currentWeather,
          updateTime:  data.updateTime
        },
        finance: data.financeGraph,
        sports: data.sportGame,
        reload: true
      });
    });
  }

  render() {
    const {reload} = this.state;
    if(!reload){
      return null;
    }
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={() => <HomePage 
                                                    news={this.state.news} 
                                                    weather={this.state.weather} 
                                                    sports={this.state.sports}
                                                    finance={this.state.finance}
                                                    socket={this.socket}
                                                    />} />
        </Switch>
      </Router>
        
    )
  }
}

export default App;
