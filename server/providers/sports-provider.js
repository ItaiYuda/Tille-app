const teams = require('../data/sports');


function sports() {
    this.teamA = teams.a[Math.floor(Math.random() * teams.a.length)];  
    this.teamB = teams.b[Math.floor(Math.random() * teams.b.length)]; 
    
    this.secondsClock = 0;
    this.clockToDisplay = '00:00'
    this.result = {
        teamAScore: 0,
        teamBScore: 0
    }
    this.randomScore = () => {
        const rand = Math.random();
        if(rand > 0.99){
            this.result.teamAScore++;
        }
        else if(rand < 0.01){
            this.result.teamBScore++;
        }   
        if((this.secondsClock/60) === 90){
            this.secondsClock = 0;
            this.clockToDisplay = '00:00';
            this.result.teamAScore = 0;
            this.result.teamBScore = 0;
        } 
        this.incrimentClock();
    }

    this.incrimentClock = () => {
        ++this.secondsClock;
        this.clockToDisplay = this.pad(parseInt(this.secondsClock / 60));
        this.clockToDisplay += ':'
        this.clockToDisplay += this.pad(this.secondsClock % 60);
        
        
    }
      
    this.pad = (val) => {
        let valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
    }
}


module.exports = sports;