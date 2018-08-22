let quote = "Talk is cheap. Show me the code.";
let author = "Linus Torvalds";

let docQuote = document.createElement("h2");
let docAuthor = document.createElement("p");
docQuote.innerHTML = quote;
docAuthor.innerHTML = " ~ " + author;

// place elements
let heading = document.getElementById("heading");
document.body.insertBefore(docQuote,heading.nextSibling);
document.body.insertBefore(docAuthor,docQuote.nextSibling);
