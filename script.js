// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Де тут GTA V?",
            answers: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy6Lh4OaihQ2Zaqfk8AhN26pa-lVq3kRWog&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFJt99fA1llILVlYFqqwlk5s2VxNumkDdSw&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8S_NA3j32ARYu97cA7Gdvk-1GNq1Gju6Adg&s", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/output=format:webp/cmmux4c3w61ps07oh4ffiwt9a"  
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Де тут Stalker 2?",
            answers: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPlNwHt1wTaCN-_7g_R-6Rmzxb1WcLigXUw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w68oAJ02X7tu_kH8CuaXcsD1Cp7t5MnTEw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8S_NA3j32ARYu97cA7Gdvk-1GNq1Gju6Adg&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIwTUskbk3YUS_vWaOakVQTMc0gC99Xw8RQ&s"  
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Де тут It takes two?",
            answers: [
                "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/UkFiVyReEoiV28rXgyHYKhfS.png?w=440",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9-rNhxJJivnJmWeymg2dOl4HmHScdEa0wQ&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBt5WkmYSDC7caTGSNgrvi3XG64Kh9sqrQQ&s", 
                "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-game-nintendo-eshop-europe-cover.jpg?v=1730381682"  
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Де тут Forza Horizon 5?",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvirR0zBonXzqVkE4NFuMfGGDEivHV_DB5Q&s", 
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0JA2rNXNZy9nYxQsYrpFGuRQNmqUFjnxCA&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqZmLU6MwtIsbJAfW2wGGzXeUFe45oV-bEw&s"  
            ],
            correct: 3,
            isImageQuiz: true
        },
        {
            question: "Де тут Valorant?",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vef5gT_mcn0mZM1PHK57xtj4_TEr8widrQ&s", 
                "https://play-lh.googleusercontent.com/axkXpBq6-6QxupS_w9V0t7z-PBJSZBs8qWSxhDWeCOIZ7_gO328vhLJv69VVunpY=w526-h296-rw", 
                "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch2/70010000105384/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4", 
                "https://media.wired.com/photos/5ea0840cb0490300086261e3/master/pass/Cul-Reveal_ReactorA_VALORANT.jpg" 
            ],
            correct: 3,
            isImageQuiz: true
        },
        {
            question: "Де тут Stardew Valley",
            answers: [
               "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg", 
                "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch2/70010000105384/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0caooNAXJIIuN4CM-te9ihk_lwc6b7pnAw&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqZmLU6MwtIsbJAfW2wGGzXeUFe45oV-bEw&s"  
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Де тут Brawl Stars?",
            answers: [
               "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w68oAJ02X7tu_kH8CuaXcsD1Cp7t5MnTEw&s", 
                "https://cms-assets.xboxservices.com/assets/65/15/6515e0be-8482-48bb-97f9-737010626408.jpg?n=Minecraft_Sneaky-Slider-1084_Tiny-Takeover_1600x675.jpg%202"  
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Де тут Fortnite?",
            answers: [
               "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN0Pna_ub3iyNIfGkbkmwsrJga-uGAeUOMg&s", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png"  
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Де тут League of Legends?",
            answers: [
               "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN0Pna_ub3iyNIfGkbkmwsrJga-uGAeUOMg&s", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg"  
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Де тут War Thunder?",
            answers: [
               "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7BnhG-z8HQXmFhZM-A8ZO_aBDWh4FqSwGA&s", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png"  
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Де тут Spider Man?",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVmHgUnzy55tr9haZkRL1S9Ww5Y7DsQfPkQ&s", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg"  
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Де тут Zelda?",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVmHgUnzy55tr9haZkRL1S9Ww5Y7DsQfPkQ&s", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png"  
            ],
            correct: 2,
            isImageQuiz: true
        },{
            question: "Де тут Minecraft?",
            answers: [
               "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy6Lh4OaihQ2Zaqfk8AhN26pa-lVq3kRWog&s"  
            ],
            correct: 3,
            isImageQuiz: true
        },{
            question: "Де тут Dota 2?",
            answers: [
               "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegN41lo-prTUDm9tsHziOpLobNNSq1HRFaA&s", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png"  
            ],
            correct: 1,
            isImageQuiz: true
        },{
            question: "Де тут Need for Speed?",
            answers: [
               "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVmHgUnzy55tr9haZkRL1S9Ww5Y7DsQfPkQ&s", 
                "https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg", 
                "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmlb2g2j20kqa07oo6wbbz9zx"  
            ],
            correct: 1,
            isImageQuiz: true
        },
    ];

    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const timerDisplay = document.querySelector('#timer');
    const scoreL = document.querySelector('#score-display');
    const finalScoreDisplay = document.querySelector('#final-score');

    let questionIndex = 0;
    let score = 0;
    let timer = 15;
    let interval;

    function showQuestion(question) {
        clearInterval(interval);
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        question.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');

            if (question.isImageQuiz) {
                const img = document.createElement('img');
                img.src = answer;
                button.appendChild(img);
                button.classList.add('image-option');
            } else {
                button.innerText = answer;
            }

            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(button, i) {
        clearInterval(interval);
        const correct = questions[questionIndex].correct;
        
        if (i === correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }

        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
        setTimeout(nextQuestion, 1000);
    }

    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${accuracy}%`;
        finalScoreDisplay.innerText = score;
    }

    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Час: ${timer}`;
        scoreL.innerText = `Бали: ${score}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
})

// Запускаємо створення доларів кожні 300 мс
setInterval(createDollar, 300);
function createDollar() {
    const container = document.getElementById('money-container');
    const dollar = document.createElement('div');
    
    dollar.innerText = '💵'; // Можна замінити на '💰' або '💸'
    dollar.classList.add('dollar');
    
    // Випадкова позиція від 0 до 100% ширини екрана
    dollar.style.left = Math.random() * 100 + 'vw';
    
    // Випадкова тривалість падіння від 3 до 7 секунд
    const duration = Math.random() * 4 + 3;
    dollar.style.animationDuration = duration + 's';
    
    // Випадковий розмір (щоб була перспектива)
    dollar.style.fontSize = Math.random() * 20 + 20 + 'px';

    container.appendChild(dollar);

    // Видаляємо елемент після завершення анімації, щоб не перевантажувати пам'ять
    setTimeout(() => {
        dollar.remove();
    }, duration * 1000);
}

// Запускаємо створення доларів кожні 300 мс
setInterval(createDollar, 300);

