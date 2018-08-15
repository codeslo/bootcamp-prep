let hedbergQuotes = {
    quotes: [
        "My fake plants died because I did not pretend to water them.",
        "Rice is great if you're really hungry and want to eat 2000 of something.",
        "My belt holds my pants up but the loops hold the belt up. I don't know who the real hero is there.",
        "The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.",
        "I don't have a girlfriend, but I do know a woman who would be mad at me for saying that.",
        "I'm sick of following my dreams. I'm just going to ask them where they're going and hook up with them later."
    ],

    getQuote: function(){
        let num = Math.floor(Math.random()*this.quotes.length);
        return this.quotes[num];
    }
};

console.log(hedbergQuotes.getQuote());