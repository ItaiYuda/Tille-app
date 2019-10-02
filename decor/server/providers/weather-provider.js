function weather(city ) {
    this.city = city;
    this.description = null;
    this.imgPath = '';
    this.forecast= [ ];

    let currentDay = new Date().getDay();

    const getRandomTemp = (i) => {
    
        let rand = Math.floor(Math.random() * 40);

        if(i == 0){
            if(rand >= 30){
                this.description = 'sunny';
                this.imgPath = 'weatherimages/sunny.png';
            }
            else if(rand >= 20){
                this.description = 'windy';
                this.imgPath = 'weatherimages/sun.png';
            }
            else if( rand >= 10) {
                this.description = 'rainy';
                this.imgPath = 'weatherimages/storm.png';
            }
            else {
                this.description = 'snowy';
                this.imgPath = 'weatherimages/snowy.png';
            }
        }
        return rand;
    }

    for (let i = 0; i < 7; i++) {
        this.forecast.push({
            id: i,
            day: currentDay++ % 7, 
            temp: getRandomTemp(i)
        });
    }


    
};

module.exports = weather;