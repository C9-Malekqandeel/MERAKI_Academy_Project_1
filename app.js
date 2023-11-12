const boxPlay = [
    [],
    [],
    []
]

const row = ["","" ,"", "", "", "","","",""];
const element= document.querySelectorAll('.Box')
const status = document.querySelector('#status')
const restart = document.querySelector('#restart')
let player1 ="<img src='./X Letter.png'>"
let player2 ="<img src='./O Letter.png'>"


console.log(element);
element.forEach((elem,i)=> {
    elem.addEventListener('click', addPicture)
}



)
function boxClick (){

}