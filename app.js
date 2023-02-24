// This allows the html file to read the javascript code, note-- all the code will be inside the event listener parentheses()
document.addEventListener('DOMContentLoaded', function(){

    // queryselector allows js to look inside of our html file and look for the class grid and we assign a constant variable in js as grid
    // querySelector is an inbuilt js method 
    const grid = document.querySelector('.grid');

    // start off by telling our js file the width of our grid is 10
    const width = 10;

    //This creates  a const variable that asigns the html score element to js, we use the hash since it was an id 
    const ScoreDisplay = document.querySelector('#score');

    //This creates  a const variable that asigns the html score element to js, we use the hash since it was an id 
    const StartBtn = document.querySelector('#start-button');

    //querySelectorAll in this case allows us to communicate with all 200 divs in our html file which we already turned into squares. 
    //Array.from in this case will turn all of the 200 individual squares into an array, thus, now we have an array that goes from 0-199 which represents individual squares
    // squares = [<div>,<div>,<div>,<div>,<div>,<div>... etc]
    // squares = [0,1,2,3,4,5,6...etc]
    let squares = Array.from(document.querySelectorAll('.grid div'));


    //Creating the tetrominoes, I drew a diagram to visually see how I would draw the tetrominoes in the array.
    //Since the array we created is 10x20 and is now stacked properly because of the flex wrap feature, we can create each rotation of the tetrimino by making an array of the four possible 
    //squares by refering to the diagram and inputing the index, if we need to move down a row  we use width which will go down a whole row

    const lTetromino = [
        [1,2,width+1,width*2+1],
        [width,width+1,width+2, width*2+2],
        [1,width+1,width*2,width*2+1],
        [width,width*2,width*2+1,width*2+2]
    ];

    const sTetromino = [
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [1, width+1, width+2, width*2+2]
    ];

    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ];

    const bTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ];

    //This is my own creation, not a regular tetris element but i wanted  to encoperate it because why not- Remi
    const cTetromino = [
        [width, width+2, width*2, width*2+1, width*2+2],
        [0,1,width,width*2,width*2+1],
        [0,1,2,width,width+1],
        [1,2,width+2,width*2+1,width*2+2]
    ];

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ];


    //Create an array of all the tetromino pieces
    const theTetrominoes = [lTetromino,sTetromino,tTetromino,bTetromino,cTetromino,iTetromino]


    //Decide where we want to draw the tetromino on the 10x20 grid
    //Where the position of the first square of the first tetromino rotation will be 
    //the starting rotation will always be 0
    
    let currentPosition = 4;
    let currentRotation = 0;


    //Pick a tetromino at random, tetrominoes.length gives us the length of the array, multiply this by math random will randomize the tetromino selection, math floor will round down

    let random = Math.floor(Math.random()*theTetrominoes.length);

    // //Pick a tetromino and its first rotation, the first array is thetetrominoes array, the second one is rotation of the tetromino we always want the first rotation to be the same
    let current = theTetrominoes[random][currentRotation];


    //draw the first rotation in the first tetromino
    //colorTetromino is the required function for the "forEach method", the v represents the first parameter, value, which is the value of each tetrimno position 
    //which we will then use to locate the correct current position in the square array , we also add current position because it places 
    //it in the middle of the grid instead of the left side, .forEach (function aName(value,index,array))
    //We access stylesheet to color the tetromino through .classList.add
    
    function draw(){
        current.forEach(function drawTetromino(v){
            squares[currentPosition + v].classList.add('tetromino')
        });
    };



    //undraw the tetromino to make it seem like it is moving
    function undraw(){
        current.forEach(function undrawTetromino(v){
            squares[currentPosition + v].classList.remove('tetromino')
        });
    };



    //make the tetromino move down, we use timerID so in the future we can stop 

    timerID = setInterval(moveDown, 250)

    //create the movdown function using the Draw and Undraw functions
    function moveDown(){
        undraw()
        currentPosition += width
        draw()
        freeze();
        
  

    };

    //create the freeze function
    function freeze(){
        if(current.some(v => squares[currentPosition + v + width].classList.contains('taken'))){
            current.forEach(v => squares[currentPosition + v].classList.add('taken'))
            random = Math.floor(Math.random()*theTetrominoes.length)
                    current = theTetrominoes[random][currentRotation]
                    currentPosition = 4
                    draw();
                    

        };
    };





   console.log() 





























});





