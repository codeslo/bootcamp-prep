// Write a function removeColumns that accepts two arguments

// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

function removeColumns(arr,num){
    let grid = arr;
    let element = []; // sometimes variable naming can help reduce confusion
    // nested loop solution
    for(let i = 0; i < grid.length; i++){
        element = grid[i];
        // run inner loop to remove num columns from element
        for(let j = 0; j < num; j++){
            // run pop num times
            element.pop();
        }
    }

    return grid;
}

let myArr = [[1,2,3],[1,2,3],[1,2,3]];

console.log(removeColumns(myArr,1));
