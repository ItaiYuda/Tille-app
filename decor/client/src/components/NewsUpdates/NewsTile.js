import React from 'react';
import './NewsStyle.css';
import timePad from '../../utilities/timePad';

const NewsTile = (props) => {
    const changeScreen = () => {
        props.handleScreenChange('news');
    }

    const {news, updateTime} = props.news;        
    let displayUpdateTime = timePad(updateTime);
    return (
        <div className="news-tile tile" onClick={changeScreen}>
            <h2>News Updates</h2>
            <div className="article-tile overflow">
                <div className='news-update'>
                    Breaking news! {displayUpdateTime}
                </div>
                <div className='news-container'>
                    {news.article}  
                </div>
                                    
            </div>
        </div>
    )
  
}

export default NewsTile;