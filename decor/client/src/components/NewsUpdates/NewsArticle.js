import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NewsArticle extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: this.props.news.news
        }
    }
    
    screenChange = () => {
        this.props.handleScreenChange('homepage');
    }
    render() {
        
        return (
            <div className='new-page-container tile'>
                <h1>{this.state.news.title}</h1>
                <p>{this.state.news.article}</p>
                <button onClick={this.screenChange}>Back to homePage</button>
            </div>
        )
    }
}

export default withRouter(NewsArticle);
