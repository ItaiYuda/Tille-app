import React from 'react';
import './sportsStyle.css';

const SportTile = (props) => {
    const {sports } = props;
    return (
        <div className='tile'>
            <h2>Sports</h2>
            <div className='sport-container'>
                <div className='sport-teams'>
                    <div>
                        <img src={`http://localhost:4000/${sports.teamA.path}`} alt='club A' />
                        <h4>{sports.teamA.name}</h4>
                    </div>
                    <div className='score'>{sports.result.teamAScore}</div>
                </div>
                <div className='sport-details'>
                    <label>-</label>
                    <div>{sports.clockToDisplay}</div>
                </div>
                <div className='sport-teams'>
                    <div className='score'>{sports.result.teamBScore}</div>
                    <div>
                        <img src={`http://localhost:4000/${sports.teamB.path}`} alt='club B' /> 
                        <h4>{sports.teamB.name}</h4>
                    </div>  
                </div>
                
            </div>
            
        </div>
    )
}

export default SportTile;
