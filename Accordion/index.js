const item = document.getElementsByClassName('item')
const showIcon = document.getElementsByClassName('showIcon');
const closeIcon = document.getElementsByClassName('closeIcon');

// console.log(item);

for(let i= 0 ; i< item.length ; i++){
    closeIcon[i].style.display= "none";

    item[i].addEventListener("click", () => {
        const toggleResult = item[i].classList.toggle("active");

        if(toggleResult){
            closeIcon[i].style.display ="block";
            showIcon[i].style.display ="none";
        }
        else{
            closeIcon[i].style.display ="none";
            showIcon[i].style.display ="block";
        }
    });
}