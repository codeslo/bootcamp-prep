let str1 = 'cookies are good!';
let search = 'cook';


function myIndexOf(str, searchTerm) {
    let firstLetter = searchTerm[0];
    let len = searchTerm.length;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === firstLetter) {
            let match = str.slice(i, i + len);
            if (match === searchTerm) {
                return i;
            }
        }
    }

    return -1;
}

console.log(myIndexOf(str1, search));