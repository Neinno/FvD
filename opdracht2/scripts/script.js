// JavaScript Document

let buttonNav = document.querySelector("nav > button");
let closeNav = document.querySelector("nav > section > button:last-of-type");
let newCard = document.querySelector("nav > section > button:first-of-type");
let bingoButton = document.querySelector("main > button");
let ballFeedback = document.querySelector('main > section > p')

// Random ball Array, waar de balletjes in komen
const randomBall = [];
// Delay voor hoe lang het duurt voordat de balletjes
const delay = 2000;
// Aantal ballen 
const ballAmmount = 75;


// Open and close nav
buttonNav.addEventListener("click", showMenu);
closeNav.addEventListener("click", closeMenu);

// Starten van kaart
function showMenu() {
  let toggleMenu = document.querySelector("nav > section");
  toggleMenu.classList.toggle("show");
}

function closeMenu() {
  let toggleMenu = document.querySelector("nav > section");
  toggleMenu.classList.toggle("show");
}

function showMain() {
  let toggleMain = document.querySelector("main > ul");
  toggleMain.classList.add("showMain");
}

function showButton() {
  let toggleButton = document.querySelector("main > button");
  toggleButton.classList.add("showButton");
}

newCard.addEventListener("click", generateBingoCard);
newCard.addEventListener("click", generateBall);
newCard.addEventListener("click", showMain);
newCard.addEventListener("click", showButton);

//////////////
// Bingo Vakje
//////////////
let bingoListItems = document.querySelectorAll("main > ul li");

// Bingo met spelen met muis en toetsenbord
for (let i = 0; i < bingoListItems.length; i++) {
  // Bedienen met muis
  bingoListItems[i].addEventListener("click", bingoActive);

  // Bedienen met Keyboard
  bingoListItems[i].addEventListener("keypress", function (press) {
    if (press.key === "Enter") {
      press.preventDefault();
      this.classList.toggle("bingoActive");
    }
  });
}

function bingoActive() {
  this.classList.toggle("bingoActive");
}

// Bingo nummertjes genereren
function generateBingoCard() {
  ///////////////////////
  // Number column 1
  ///////////////////////

  //Array van nummer
  const bingoNumber1 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

  // Naar welke column moet ik kijken
  const bingoColumn1 = (bingoNumber1, num = 1) => {
    // Maak eerst een lege array
    const res = [];
    // for loop: https://www.w3schools.com/js/js_loop_for.asp
    for (let i = 0; i < num; ) {
      // Maak random nummers aan
      const random = Math.floor(Math.random() * bingoNumber1.length);
      if (res.indexOf(bingoNumber1[random]) !== -1) {
        continue;
      }
      res.push(bingoNumber1[random]);
      i++;
    }
    // Sorteer van laag naar hoog
    res.sort(function (value1, value2) {
      return value1 - value2;
    });
    return res;
  };

  bingoColumnResult1 = bingoColumn1(bingoNumber1, 5);

  ///////////////////////
  // Number column 2
  ///////////////////////
  const bingoNumber2 = [
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const bingoColumn2 = (bingoNumber2, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * bingoNumber2.length);
      if (res.indexOf(bingoNumber2[random]) !== -1) {
        continue;
      }
      res.push(bingoNumber2[random]);
      i++;
    }
    res.sort(function (value1, value2) {
      return value1 - value2;
    });
    return res;
  };

  bingoColumnResult2 = bingoColumn2(bingoNumber2, 5);

  ///////////////////////
  // Number column 3
  ///////////////////////
  const bingoNumber3 = [
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
  ];
  const bingoColumn3 = (bingoNumber3, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * bingoNumber3.length);
      if (res.indexOf(bingoNumber3[random]) !== -1) {
        continue;
      }
      res.push(bingoNumber3[random]);
      i++;
    }
    res.sort(function (value1, value2) {
      return value1 - value2;
    });
    return res;
  };

  bingoColumnResult3 = bingoColumn3(bingoNumber3, 5);

  ///////////////////////
  // Number column 4
  ///////////////////////
  const bingoNumber4 = [
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
  ];
  const bingoColumn4 = (bingoNumber4, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * bingoNumber4.length);
      if (res.indexOf(bingoNumber4[random]) !== -1) {
        continue;
      }
      res.push(bingoNumber4[random]);
      i++;
    }
    res.sort(function (value1, value2) {
      return value1 - value2;
    });
    return res;
  };

  bingoColumnResult4 = bingoColumn4(bingoNumber4, 5);

  ///////////////////////
  // Number column 5
  ///////////////////////
  const bingoNumber5 = [
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
  ];
  const bingoColumn5 = (bingoNumber5, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * bingoNumber5.length);
      if (res.indexOf(bingoNumber5[random]) !== -1) {
        continue;
      }
      res.push(bingoNumber5[random]);
      i++;
    }
    res.sort(function (value1, value2) {
      return value1 - value2;
    });
    return res;
  };

  bingoColumnResult5 = bingoColumn4(bingoNumber5, 5);

  // Bingo column 1
  document.querySelector("main > ul li:nth-of-type(1)").innerHTML =
    bingoColumnResult1[0];
  document.querySelector("main > ul li:nth-of-type(2)").innerHTML =
    bingoColumnResult1[1];
  document.querySelector("main > ul li:nth-of-type(3)").innerHTML =
    bingoColumnResult1[2];
  document.querySelector("main > ul li:nth-of-type(4)").innerHTML =
    bingoColumnResult1[3];
  document.querySelector("main > ul li:nth-of-type(5)").innerHTML =
    bingoColumnResult1[4];

  // Bingo column 2
  document.querySelector("main > ul li:nth-of-type(6)").innerHTML =
    bingoColumnResult2[0];
  document.querySelector("main > ul li:nth-of-type(7)").innerHTML =
    bingoColumnResult2[1];
  document.querySelector("main > ul li:nth-of-type(8)").innerHTML =
    bingoColumnResult2[2];
  document.querySelector("main > ul li:nth-of-type(9)").innerHTML =
    bingoColumnResult2[3];
  document.querySelector("main > ul li:nth-of-type(10)").innerHTML =
    bingoColumnResult2[4];

  // Bingo column 3
  document.querySelector("main > ul li:nth-of-type(11)").innerHTML =
    bingoColumnResult3[0];
  document.querySelector("main > ul li:nth-of-type(12)").innerHTML =
    bingoColumnResult3[1];
  document.querySelector("main > ul li:nth-of-type(14)").innerHTML =
    bingoColumnResult3[3];
  document.querySelector("main > ul li:nth-of-type(15)").innerHTML =
    bingoColumnResult3[4];

  // Bingo column 4
  document.querySelector("main > ul li:nth-of-type(16)").innerHTML =
    bingoColumnResult4[0];
  document.querySelector("main > ul li:nth-of-type(17)").innerHTML =
    bingoColumnResult4[1];
  document.querySelector("main > ul li:nth-of-type(18)").innerHTML =
    bingoColumnResult4[2];
  document.querySelector("main > ul li:nth-of-type(19)").innerHTML =
    bingoColumnResult4[3];
  document.querySelector("main > ul li:nth-of-type(20)").innerHTML =
    bingoColumnResult4[4];

  // Bingo column 5
  document.querySelector("main > ul li:nth-of-type(21)").innerHTML =
    bingoColumnResult5[0];
  document.querySelector("main > ul li:nth-of-type(22)").innerHTML =
    bingoColumnResult5[1];
  document.querySelector("main > ul li:nth-of-type(23)").innerHTML =
    bingoColumnResult5[2];
  document.querySelector("main > ul li:nth-of-type(24)").innerHTML =
    bingoColumnResult5[3];
  document.querySelector("main > ul li:nth-of-type(25)").innerHTML =
    bingoColumnResult5[4];
}

// Balletjes genereren
function generateBall() {

    while(randomBall.length < 75) {
        const random = Math.floor(Math.random() * 75) + 1;
        if(randomBall.indexOf(random) === -1) randomBall.push(random);
    }

    // Maak bal aan met timeout
    // List item wordt aangemaakt met loop
    randomBall.forEach(function (ball, index) {
      setTimeout(function () {
        const ballList = document.querySelector('main section > ul')
        const allBalls = ballList.children.length;

        const ballItem = document.createElement('li');
        ballItem.innerHTML = `<p>` + ball + `</p>`
        ballList.appendChild(ballItem);

        // Feedback van aantal ballen dat je nog over hebt
        ammountOfBalls = ballAmmount - allBalls - 1;
        ballFeedback.innerHTML = `Je hebt nog ` + ammountOfBalls + ` ballen over`;
        
        if (ammountOfBalls = 0) {
          ballFeedback.innerHTML = `Je hebt geen ballen meer`;
        }

      }, index * delay)   
    });  
    
  
};

/////////////////////////
// BINGO!
////////////////////////
// Met knop
let bingoMain = document.querySelector("main > ul");
let bingoBallsList = document.querySelector("main > section ul");

function endGame() {
  bingoMain.classList.add("bingo");
  bingoBallsList.remove();
}

bingoButton.addEventListener("click", endGame)


// Met Voice
// bron: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
// en  : https://codepen.io/shooft/pen/wvPgqRX
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

/* Wat mag ik roepen? */
var commandos = ['bingo' , 'Bingo'];
var grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

function bingoHandle(event) {
  let last = event.results.length - 1;
  let commando = event.results[last][0].transcript;
  console.log('Result received: ' + commando + '. ' + 'Confidence: ' + event.results[0][0].confidence);

  if ( commando.trim() == "bingo") {
    bingoMain.classList.add("bingo");
    bingoBallsList.remove();
  } else if ( commando.trim() == "Bingo") {
    bingoMain.classList.add("bingo");
    bingoBallsList.remove();
  }
}

function hoorIkBingo(){
   recognition.start();
}

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'nl';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
  bingoHandle(event);
}

recognition.onend = function() {
  hoorIkBingo();
}

hoorIkBingo();