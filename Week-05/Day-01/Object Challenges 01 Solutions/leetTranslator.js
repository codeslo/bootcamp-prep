function leetTranslator(str) {
    let decoder = {
        "A": "@",
        "B": "8",
        "C": "(",
        "D": "|)",
        "E": "3",
        "F": "ph",
        "G": "g",
        "H": "#",
        "I": "l",
        "J": "_|",
        "K": "|<",
        "L": "1",
        "M": "|'|'|",
        "N": "/\/",
        "O": "0",
        "P": "|D",
        "Q": "(,)",
        "R": "|2",
        "S": "5",
        "T": "+",
        "U": "|_|",
        "V": "|/",
        "W": "|/|/'",
        "X": "><",
        "Y": "j",
        "Z": "2",
        " ": " "
    };

    let strArray = str.split('');
    let result = [];
    for (let i = 0; i < strArray.length; i++) {
        result.push(decoder[strArray[i].toUpperCase()]);
    }
    return result.join('');
}

console.log(leetTranslator('leet is for losers'));