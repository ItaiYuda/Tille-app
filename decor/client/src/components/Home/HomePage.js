import React, {Component} from 'react';
import NewsTile from './../NewsUpdates/NewsTile';
import WeatherTile from './../Weather/WeatherTile';
import SportsTile from './../Sports/SportTile';
import FinanceTile from './../Finance/FinanceTile';
import SubscribeTile from './../Subscribe/SubscribeTile';
import NewsArticle from '../NewsUpdates/NewsArticle';
import WeatherForecast from '../Weather/WeatherForecast';

class HomePage extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      screenDisplay: 'homepage',
      news: {
        news: this.props.news.news,
        updateTime: this.props.news.updateTime
      },
      weather: {
        weather:this.props.weather.weather,
        updateTime: this.props.weather.updateTime
      },
      sports: this.props.sports,
      finance: this.props.finance
    }
  }

  componentDidMount = () => {
    const {socket} = this.props;
    
    socket.on('updateNews' , (data) => {
        this.setState({news:{news: data.currentNews, updateTime: data.updateTime}});
    })
    socket.on('updateWeather', (data) => {
      this.setState({weather: {weather: data.currentWeather, updateTime: data.updateTime}})
    });
    socket.on('updateSports', data => {
      this.setState(prevState => ({
        ...prevState,
        sports: data.sportGame
      }));
    });
    socket.on('updateFinance', (data) => {
      this.setState({finance: data.financeGraph});
    })
  }
    
  handleScreenChange = (screen) => {
    this.setState({screenDisplay: screen});
  }

  render() {
    const {screenDisplay} = this.state;
    switch(screenDisplay){
      case 'news':
        return <NewsArticle news={this.state.news} handleScreenChange={this.handleScreenChange}/>
      case 'weather': 
        return <WeatherForecast weather={this.state.weather} handleScreenChange={this.handleScreenChange}/>
      case 'homepage':
      default: 
        return (
          <div className="app-container">
            <NewsTile news={this.state.news} handleScreenChange={this.handleScreenChange} />
            <WeatherTile weather={this.state.weather} handleScreenChange={this.handleScreenChange} />
            <FinanceTile finance={this.state.finance} />
            <SportsTile sports={this.state.sports} />  
            <SubscribeTile />
          </div>
          )  
    }
    
  }
 
}

export default HomePage;