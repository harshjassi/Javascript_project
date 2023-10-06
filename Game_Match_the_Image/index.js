let cardList = [
    {
        name : "avenger",
        img : "./image/avenger.jpeg",
    },
    {
        name : "pirate",
        img : "./image/pirate.jpg",
    },
    {
        name : "kingfisher",
        img : "./image/kingfisher.jpg"
    },
    {
        name : "rocket",
        img : "./image/rocket.png"
    },
    {
       name : "moneyHeist",
        img : "./image/moneyHeist.jpg"
    },
    {
        name : "spiderman",
        img : "./image/spiderman.jpg"
    },
    {
        name : "thor",
        img : "./image/thor.jpeg"
    },
    {
        name : "motuPatlu",
        img : "./image/motuPatlu.jpg"
    },
    {
        name : "captainAmerica",
        img : "./image/captainAmerica.jpg"
    },
    {
        name : "ironman",
        img : "./image/ironman.jpeg"
    }
];

const parentDiv = document.querySelector('#cardgame');

// const music1 = new Audio('./sound/1.mp3');
const music2 = new Audio('./sound/2.mp3');
const music3 = new Audio('./sound/no.mp4');

// duplicate karna hai
console.log(cardList);
const duplicateCard = cardList.concat(cardList);
console.log(duplicateCard);

// suffling of card

const sufflingCard = (duplicateCard) =>{
    for(let i = duplicateCard.length-1; i> 0; i--){
        let j = Math.floor(Math.random()* (i+1));
        console.log(i,j);
        let temp = duplicateCard[i];
        duplicateCard[i] = duplicateCard[j];
        duplicateCard[j] = temp

    }
    return duplicateCard;   
}

const suffled = sufflingCard(duplicateCard);
console.log(suffled);


// styling the card

const sameCard = () =>{
    let cardSelected = document.querySelectorAll('.cardSelected');

    cardSelected.forEach((currelement) => {
        currelement.classList.add('sameImage');   
    });
}

// game reset again after matching or not matching

const resetGame = () => {
    count = 1;
    firstCard = "";
    secondCard = "";

    let cardSelected = document.querySelectorAll('.cardSelected');

    cardSelected.forEach((currelement) => {
        currelement.classList.remove('cardSelected');     
    }); 

}

// click on image
let count = 1;
let firstCard = "";
let secondCard = "";

parentDiv.addEventListener('click', (event) =>{
    let currCard = event.target;

    if (count < 3){
        
        if(currCard.id === "cardgame"){return false;}
        
        if(count === 1){
            count++;
            firstCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('cardSelected');    
            console.log(currCard.parentNode.classList);
        }
        else if(count === 2 && DOMTokenList.value !==' card cardSelected'){
            // console.log(event.target.classList)
            count++; 
            secondCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('cardSelected');
            console.log(currCard.parentNode.classList);
        }
        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // currCard.classList.add ('sameCard');
                setTimeout(() => {
                    music2.play();
                    sameCard();
                    resetGame();
                }, 800);
            }
            else{
                setTimeout(() => {
                    music3.play();
                    resetGame();                    
                }, 800);
            }
        }
    }
})

// card banana hai

// console.log(suffled[1].img)

for(let i = 0; i< suffled.length; i++){

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = suffled[i].name; 
    
    const frontDiv = document.createElement('div');
    frontDiv.classList.add('front');
    
    const backDiv = document.createElement('div');
    backDiv.classList.add('back');
    backDiv.style.backgroundImage = `url(${suffled[i].img})`;
    
    parentDiv.appendChild(childDiv);
    childDiv.appendChild(frontDiv);
    childDiv.appendChild(backDiv); 
}
