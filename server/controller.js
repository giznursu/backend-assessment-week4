module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ["I learn by going where I have to go.","If you think you can do a thing or think you can’t do a thing, you’re right.","Keep your face to the sunshine and you will never see shadows.","Like the river flow into the sea. Something are just meant to be.","All your hard work will soon pay off."];

        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];
        res.status(200).send(randomFortune);
    },
    isToday: (req,res) => {
        const answers = ["Not bad","So so","Amazing","Can be better","Today is a nice day"];
        let randomIndex = Math.floor(Math.random() * answers.length);
        let randomAnswers = fortunes[randomIndex];
        res.status(200).send(randomAnswers)
    },
    addAnswer: (req, res) => {
        let {answer} = req.body;

        answers.push(answer)

        res.status(200).send('Answer Added')

}
}

