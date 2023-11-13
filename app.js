const boxPlay = [
    ["","",""],
    ["","",""],
    ["","",'']
]

let current = "X"

const render = (boxPlay)=>{
 for(let i = 0; i<3;i++){
    for(let ind= 0; ind<3; ind++ ){
        const content = document.querySelector('.content')
        const box = document.createElement('div')
        box.classList.add("Box")
        content.append(box)
        box.style.fontSize="80px"
        box.innerText = boxPlay[i][ind]
        box.addEventListener('click', ()=>{
            if(box.innerText == ""){
                box.innerText = current
                changeplay()
                checkWin()
            }
        })
    }
 }
}

render(boxPlay)


// [i][0]===[1]===[2]
// [0][0]===[1][0]===[2][0]
// [0][1]===[1][1]===[2][1]
// [0][2]===[1][2]===[2][2]




// const block = document.createElemnt("div")
// block.classList.add("Box")

//const element= document.querySelectorAll('.Box')
const status = document.querySelector('#status')
const restart = document.querySelector('#restart')



const picture_O = ' <img src="./O Letter.png"> '
/* 
const addPicture = ()=> {
    const box = document.querySelector('.Box')
    console.log(box);
    console.log(player1);
 */
/*         box.textContent = picture_O
 */    

/* 
console.log(element);
element.forEach(elem => {
    elem.addEventListener('click', addPicture)
});
 */
// function wil created to changePlayer + checkWin + restartPlay
//changePlayer using :?
// checkWin using multipleArray plus if 
//restartPlay using clear ForEach box
//Audio will be created on each change on addPicture 

// Two issue :1.reflected the img 2.Reach every box lonely