let basicH1 = document.getElementById("basicH1");
let button01 = document.getElementById("button01");
let image01 = document.getElementById("img01");

function changeH1(){
    if(basicH1.innerHTML === "This is a heading") {
        basicH1.innerHTML = "Changed by Javascript magic!";
        image01.src = "marvin02.jpg";
    } else {
        basicH1.innerHTML = "This is a heading";
        image01.src = "marvin01.jpg";
    }
}

button01.addEventListener('click', changeH1);