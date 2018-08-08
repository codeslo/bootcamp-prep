// Write a function makeGrid that accepts two arguments:

// numColumns (number)
// numRows (number)
// makeGrid should return a two-dimensional array that represents a grid of the given dimensions.

function makeGrid(cols,rows){
    let grid = [];
    let row = [];
    // build row. one entry for each column
    for(let c= 1; c<= cols; c++){
        row.push(c);
    }
    // push rows to grid
    for(let r = 1; r <= rows; r++){
        grid.push(row);
    }
    return grid;
};

console.log(makeGrid(4,4));