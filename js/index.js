
let form = document.createElement('FORM', "form");
let eightBall = document.getElementById("form-container").appendChild(form);
let fieldSet = document.createElement("fieldset");
fieldSet.setAttribute("class", "myForm");
eightBall.appendChild(fieldSet);

 
let myDiv = document.createElement('div');
document.querySelector(".myForm");
myDiv.setAttribute("class", "question");
fieldSet.appendChild(myDiv);

let label = document.createElement("label");
label.setAttribute("for", "ask");
label.innerHTML = "Ask me anything! ";
myDiv.appendChild(label);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "ask");
label.appendChild(input);

let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.setAttribute("onclick", "handleClick()");
button.setAttribute("value", "Submit");
button.innerHTML = "Ask"
fieldSet.appendChild(button);

let magic8Balls = [
   "images/magic8ball_1.png",
   "images/magic8ball_2.png",
   "images/magic8ball_3.png",
   "images/magic8ball_4.png",
   "images/magic8ball_5.png",
   "images/magic8ball_6.png",
   "images/magic8ball_7.png",
   "images/magic8ball_8.png"
];

function starterImage() {
    let starter = document.createElement('img');
    starter.setAttribute('id', 'eight-ball');
    starter.src = "images/image.png";
    document.getElementById('answers').appendChild(starter);
}
starterImage();

function randomImage() {
    let image = document.createElement('img');
    image.setAttribute('id', 'eight-ball');
    let usersAnswer = magic8Balls[Math.floor(Math.random() * magic8Balls.length)];
    image.src = usersAnswer;
    let item = document.getElementById('answers');
    item.replaceChild(image, item.childNodes[0]);
}

function handleClick() {
    let usersClick = document.getElementById('button');
    usersClick.addEventListener('click', clearImage);

}

function clearImage() {
    let question = document.getElementById('ask').value;
    let message = document.getElementById('answers');
   
    console.log(question)
    if(question === "") {
        message.innerHTML = "Go ahead, ask me anything!"
    } else {
        randomImage();
        document.getElementById('ask').value = "";
    }
}
