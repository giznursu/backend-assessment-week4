const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const isTodayBtn = document.getElementById("isToday")
const newAnswerBtn = document.getElementById('new-answer-button')
const goals = document.querySelector("#goals");
const goalsInput = document.querySelector("#goalsInput");



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = (evt) => {
    evt.preventDefault();
    axios.get("https://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    }
        
    )
    .catch(err => console.log(err))
    
};
const isToday = (evt) => {
    evt.preventDefault();
    axios.get("http://localhost:4000/api/answer")
        .then(res => {
            const data = res.data;
            alert(data)
        })
    .catch(err => console.log(err))
};

const addAnswer =(evt)=>{
    evt.preventDefault();
    let answerInput = document.getElementById('new-answer-input')
    let body = {
        answer: answerInput.value
    }

    axios.post("http://localhost:4000/api/answers", body)
        .then(res => {
            alert(res.data)
            fortuneInput.value = ''
        })
        .catch(err => console.log(err))

}

const createTodo = (evt) => {
    evt.preventDefault();
    const goalText = goalInput.value;
    if (!goalText.trim()) {
        alert(`Enter goals you need to achieve!`);
        return;
    }
    axios.post("http://localhost:4000/api/goal", { goal: goalText })
        .then((res) => {
        alert(res.data);
        })
        .catch((err) => console.log(err))

}
isTodayBtn.addEventListener('click', isToday)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
newAnswerBtn.addEventListener('click',addAnswer)
