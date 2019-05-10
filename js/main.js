/*----- constants -----*/
const buttonsArray = [
    {
        name: '1',
        src: 'assets/2.jpg'
    },
    {
        name: '2',
        src: 'assets/6.jpg'
    },
    {
        name: '3',
        src: 'assets/8.jpg'
    },
    {
        name: '4',
        src: 'assets/4.jpg'
    },
    {
        name: '5',
        src: 'assets/3.jpg'
    },
    {
        name: '6',
        src: 'assets/9.jpg'
    },
    {
        name: '7',
        src: 'assets/7.jpg'
    },
    {
        name: '8',
        src: 'assets/1.jpg'
    },
    {
        name: '9',
        src: 'assets/5.jpg'
    }
];

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

function createButtons(shuffledArray) {
    //iterates through the shuffled array
    shuffledArray.forEach(function(el) {
        //creates a button for each item in the shuffled array and appends it as a child of the numbers ID
        let numButton = document.createElement('button');
        document.getElementById('numbers').appendChild(numButton);
        numButton.textContent = el.name;
        //links the new shuffled index with its original src so the images are linked with the correct button
        numButton.data = el.src
        //disables all buttons
        numButton.disabled = true;
        //make sure the id are 0 indexed
        numButton.id = `btn${el.name -1}`
        numButton.addEventListener('click', placePiece);
        //game logic to enable each button starting with 1
        if((el.name === '1')) {
            numButton.disabled = false;
        }
    })
    //start button
    let start = document.createElement('button');
    document.getElementById('start').appendChild(start);
    start.textContent = "Start";
    start.style.fontFamily = "bangers";
    start.addEventListener('click', begin);
    // refresh button
    let refresh = document.createElement('button');
    document.getElementById('refresh').appendChild(refresh);
    refresh.textContent = "Try Again"
    refresh.style.fontFamily = "bangers";
    refresh.addEventListener('click', startOver);
}

//change

//Shuffles original array and returns it
function shuffle(array) {
    let i, j, temp;
    for(i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

function placePiece(event) {
    //allows us to know what the next button to enable is
    let nextButton = document.getElementById(`btn${event.target.textContent}`)
    //search for the div ids and switch to the correct background
    document.getElementById(event.target.textContent).style.backgroundImage =`url(${event.target.data})`;
    event.target.disabled = true
    nextButton.disabled = false
}


function startOver() {
    let reload = document.location.reload(true);
}

var seconds_left = 10;
function begin() {
    document.getElementById('start').style.pointerEvents = "none";
    var interval = setInterval(function() {
        if(seconds_left) {
        document.getElementById('timer').textContent = seconds_left--;
        document.getElementById('numbers').style.pointerEvents = "auto";
        } else {
            document.getElementById('timer').innerHTML = "Maybe Next Year";
            clearInterval(interval);
            document.getElementById('numbers').style.pointerEvents = "none";
        }
        document.getElementById('timer').style.fontSize = "40px";
    }, 1000);
}

createButtons(shuffle(buttonsArray));
document.getElementById('numbers').style.pointerEvents = "none";