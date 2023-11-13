const boxPlay = [
    [],
    [],
    []
]

const element= document.querySelectorAll('.Box')
const status = document.querySelector('#status')
const restart = document.querySelector('#restart')

const player1 = new Image (100,100);
player1.src="X Letter.png";
const player2 = new Image (100 ,100);
player2.src="O Letter.png"

const picture_O = '<img src="./O Letter.png">'

const addPicture = ()=> {
    const box = document.querySelector('.Box')
    console.log(box);
        box.textContent = picture_O
    
}

console.log(element);
element.forEach(elem => {
    elem.addEventListener('click', addPicture)
});
