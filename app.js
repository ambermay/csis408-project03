let mapLayout = [
    ['w','w','w','w','w','w','w','w','w','w','w','w','w'],
    ['w','c','c','c','c','c','w','c','c','c','c','c','w'],
    ['w','c','w','w','w','c','w','c','w','w','w','c','w'],
    ['w','c','w','c','c','c','c','c','c','c','w','c','w'],
    ['w','c','c','c','w','w','p','w','w','c','c','c','w'],
    ['w','c','w','c','c','c','c','c','c','c','w','c','w'],
    ['w','c','w','w','c','c','w','c','c','w','w','c','w'],
    ['w','c','c','c','c','c','w','c','c','c','c','c','w'],
    ['w','w','w','w','w','w','w','w','w','w','w','w','w']
]

const WALL = 'w';
const COIN = 'c';
const GROUND = 'g';
const PACMAN = 'p';

let map;

let pacman = {
    x: 6,
    y: 4,
    direction: 'right'
};

//converts mapLayout array to DOM elements
function createWalls(data) {

    let tilesArray = [];

    for(let row of data) {
        for(let col of row) {
            let tile = document.createElement('div');

            tile.classList.add('tile'); //Add class called tile to div

            if(col === WALL) {
                tile.classList.add('wall'); //Add class called wall to div
            }
            else if(col === COIN) {
                tile.classList.add('coin'); //Add class called coin to div
            }
            else if(col === GROUND) {
                tile.classList.add('ground'); //Add class called ground to div
            }
            else if(col === PACMAN) {
                tile.classList.add('pacman'); //Add class called pacman to div
                tile.classList.add(pacman.direction); //class for direction pacman is facing
            }

            tilesArray.push(tile);
        }
        
        let brTile = document.createElement('br');
        tilesArray.push(brTile);        
    }

    return tilesArray;
}

function drawMaze() {
    map = document.createElement('div');

    let tiles = createWalls(mapLayout);
    for (let tile of tiles) {
        map.appendChild(tile);
    }

    document.body.appendChild(map); //Adds map to screen
}

function eraseMap() {
    document.body.removeChild(map);
}



//Main game function
function main() {
    drawMaze();
}

main();
