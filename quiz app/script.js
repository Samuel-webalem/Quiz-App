const container = document.querySelector('.container')
const que_cont = document.querySelector('#question-container');
const quest = document.querySelector('.quest');
const answer = document.querySelector('.ans-btn');
const ans_cont = document.querySelector('.answer-container')
const next = document.querySelector('#next');
const next_cont = document.querySelector('#nxt-container')
const start = document.querySelector('#start');
let currentno, shuffel, auestno,outof;

start.classList.remove('hide-start');
const question_list = [
    {
        questions: '. What does HTML stand for?',
        answers: [
            { text: 'A. Hyper Text Markup Language ', correct: true },
            { text: 'B. Hyper Text Marketing Language', correct: false },
            { text: 'C.Hyper Trainer Marking Language', correct: false },
            {text: 'D. Hyper Text Markup Leveler', correct: false }
        ]
    },
    {
        questions: '. _______ is the process of finding errors and fixing them within a program.',
        answers: [
            { text: 'A. Compiling', correct: false },
            { text: 'B. Executing', correct: false },
            { text: 'C. Debugging', correct: true },
            {text: 'D. Scanning', correct:false }
        ]
    },
    {
        questions: '. An array Index starts with?',
        answers: [
            { text: 'A. -1', correct: false },
            { text: 'B. 0', correct: true },
            { text: 'C. 2', correct: false },
            {text: 'D. 1', correct:false }
        ]
    },
    {
        questions: '. Choose correct C while loop syntax.',
        answers: [
            { text: 'A. while(condition) {//statements }', correct: true },
            { text: 'B. {//statements }while(condition)', correct: false },
            { text: 'C. while(condition); {//statements }', correct: false },
            {text: 'D. while() {if(condition){//statements} }', correct:false }
        ]
    },
    {
        questions: '. Which of the following is not a programming language?',
        answers: [
             { text: 'A. TypeScript', correct: false },
            { text: 'B. Python', correct: false },
            { text: 'C. Anaconda', correct: true },
            {text: 'D. Java', correct:false }
        ]
    },
]

start.addEventListener('click', () => {
    currentno = 0;
    outof = 0;
     auestno = 1;
    que_cont.classList.remove('hide')
    start.classList.add('hide-start');
    shuffel = question_list.sort(() => Math.random() - .5);
    showquestion(shuffel[currentno]);
})


function nextquestion() {
    reset_state();
    showquestion(shuffel[currentno]);
}

function showquestion(question_par) {
    quest.textContent = auestno + question_par.questions;
    auestno++;
    let count = 0;
    question_par.answers.forEach(answer_par => {
        const button = document.createElement('button');
        count++;
        button.className = 'ans-btn' + count;
        button.innerHTML = answer_par.text;
         
        ans_cont.appendChild(button);
        button.addEventListener('click', () => {
            selected(answer_par,button);
            showanswer(question_par.answers); 
        })
    });
}
function selected(answer_par, button) {
            let first = document.querySelector('.ans-btn1')
            let sec = document.querySelector('.ans-btn2');
            let thr = document.querySelector('.ans-btn3');
            let forth = document.querySelector('.ans-btn4');
            if (button.className==='ans-btn1'&&answer_par.correct) {
                first.id = 'write';
                sec.id = 'wrong';
                thr.id = 'wrong';
                forth.id = 'wrong';
                outof++;
            }
           else if (button.className==='ans-btn1'&&!answer_par.correct) {
                first.id = 'wrong';
                sec.className = '';
                thr.className = '';
                forth.className = '';
            }
            if (button.className==='ans-btn2'&&answer_par.correct) {
                first.id = 'wrong';
                sec.id = 'write';
                thr.id = 'wrong';
                forth.id = 'wrong';
                outof++;
            }
            else if (button.className==='ans-btn2'&&!answer_par.correct) {
                sec.id = 'wrong';
                 first.className = '';
                thr.className = '';
                forth.className = '';
            }
           if (button.className==='ans-btn3'&&answer_par.correct) {
                first.id = 'wrong';
                sec.id = 'wrong';
                thr.id = 'write';
               forth.id = 'wrong';
               outof++;
            }
            else if (button.className==='ans-btn3'&&!answer_par.correct) {
               thr.id = 'wrong';
                sec.className = '';
                first.className = '';
                forth.className = '';
            }
             if (button.className==='ans-btn4'&&answer_par.correct) {
                first.id = 'wrong';
                sec.id = 'wrong';
                thr.id = 'wrong';
                 forth.id = 'write';
                 outof++;
            }
            else if (button.className==='ans-btn4'&&!answer_par.correct) {
                 forth.id = 'wrong';
                  sec.className = '';
                thr.className = '';
                first.className = '';
    }
}
function showanswer() {
    next_cont.classList.remove('hide-next')
    if (shuffel.length - 1 >= currentno) {
        next.classList.remove('hide-next')
    }
}

function reset_state() {
    next.classList.add('hide-next');
    quest.textContent = "";
    ans_cont.textContent = ""; 
}

next.addEventListener('click', () => {
    currentno++;
    reset_state();
     if (currentno+1 > shuffel.length) {
        quest.textContent = "";
    ans_cont.textContent = "";
         start.classList.remove('hide-start');
         start.textContent = 'Restart';
        quest.textContent = outof +" outof " + question_list.length;
     } else {
         showquestion(shuffel[currentno]);
    }
})
 


