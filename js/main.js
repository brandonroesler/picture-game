/*----- constants -----*/
const buttonsArray = [
    {
        name: 1,
        src: '../assets/img1.jpg'
    },
    {
        name: '2',
        src: '../assets/img2.jpg'
    },
    {
        name: '3',
        src: '../assets/img3.jpg'
    },
    {
        name: '4',
        src: '../assets/img4.jpg'
    },
    {
        name: '5',
        src: '../assets/img5.jpg'
    },
    {
        name: '6',
        src: '../assets/img6.jpg'
    },
    {
        name: '7',
        src: '../assets/img7.jpg'
    },
    {
        name: '8',
        src: '../assets/img8.jpg'
    },
    {
        name: '9',
        src: '../assets/img9.jpg'
    }
];

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const piece1 = document.createElement('div');

/*----- event listeners -----*/
// document.querySelector('button').addEventListener('click', placePiece);

/*----- functions -----*/
//init();


function createButtons(x) {
    x.forEach(function(el) {
        let numButton = document.createElement('button');
        document.getElementById('numbers').appendChild(numButton);
        numButton.textContent = el.name;
    })
    
}

function shuffle(array) {
    let i, j, x;
    for(i = buttonsArray.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

// function placePiece(piece) {
//     let 
// }

createButtons(shuffle(buttonsArray));
