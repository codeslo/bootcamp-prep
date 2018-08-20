let basicH1 = document.getElementById("basicH1");
let button01 = document.getElementById("button01");
let blueButton = document.getElementById("blueButton");
let image01= document.getElementById("img01");

function changeH1(){
    if(basicH1.innerHTML === "This is a heading"){
        basicH1.innerHTML = "Changed by JavaScript Magic!"
        image01.src = "marvin02.jpg";
    }else{
        basicH1.innerHTML = "This is a heading";
        image01.src = "marvin01.jpg";
    }
}

function makeBlue(){
    if(basicH1.classList.contains("blue")){
        basicH1.classList.remove("blue");
    }else{
        basicH1.classList.add("blue");
    }
}

button01.addEventListener('click',changeH1);
blueButton.addEventListener('click',makeBlue);


