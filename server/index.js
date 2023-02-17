const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const {getFortune} = require('./controller');
const {isToday} = require('./controller');
const {addAnswer} = require('./controller')

let goalsArr = [];
let id = 1;
app.post("/api/goal", (req, res) => {
  const { goal } = req.body;
  let newGoal = {
    id,
    goal,
  };

  goalsArr.push(newGoal);
  id++;
  res.status(200).send(goalsArr);
});

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.get("/api/answer", isToday)


app.listen(4000, () => console.log("Server running on 4000"));
