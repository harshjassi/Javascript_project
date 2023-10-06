//DOM Manipualtion

// let elem = document.getElementById('firstContainer');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg_color");

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)
createElement = document.createElement("p");
createElement.innerText = "this is a created element";
tn[1].appendChild(createElement);
createElement2 = document.createElement("div");
createElement2.innerText = "this is a bold element";
tn[1].replaceChild(createElement2, createElement);

//arrow function 
function sum (a , b){
    return a + b;
}

sum = (a,b) =>{   
    return a+b;
}