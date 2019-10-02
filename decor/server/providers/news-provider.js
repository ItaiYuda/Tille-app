const newsArticle = require('../data/news');

function news() {
    this.currentNews = newsArticle[0];
    this.index = 0;

    this.nextArticle = () => {
        this.index = this.index === newsArticle.length? 0 : this.index;
                
        this.currentNews = newsArticle[this.index++];
    }
}

module.exports = news;