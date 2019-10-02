const data = require('../data/finance');
const io = require('../index');

function finance () {
    this.values = data.values;
    this.categories = data.categories;
    this.type = 'line';
    this.name = 'Apple';

    this.addRandomValue = () => {
        let lastValue = this.values[this.values.length - 1];
        let min = lastValue - 15, max = lastValue + 15;
        let rand = Math.floor(Math.random() * (max - min + 1) + min);
        this.values.push(rand);
        let newValues = this.values;
        this.values = newValues.slice(newValues.length - 12);
        this.addCategories();
        
    }

    this.incrementTime = (hour) => {
        
        let newHour = ++hour;
        if (hour < 10) {
            newHour = "0" + hour;
        }
        if( hour > 24){
            newHour = '01'    
        }
        return newHour;
    }
      

    this.addCategories = () => {
        let lastCategories = this.categories[this.categories.length - 1];
        let hour = parseInt(lastCategories.slice(0,3));
        let h = this.incrementTime(hour);
        this.categories.push(h + ':00');
        let newCategories = this.categories;
        this.categories = newCategories.slice(newCategories.length - 12);       
    }


} 


module.exports = finance;