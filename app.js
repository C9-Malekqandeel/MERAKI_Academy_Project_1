const boxPlay = [
    ["","",""],
    ["","",""],
    ["","",'']
]

let current = "O"
let continuePlay = false;

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
            if(box.innerText === ""){
                box.innerText = current
                boxPlay[i][ind]= current
                current =changeplay()
                checkWin(boxPlay)
                if(!continuePlay){
                    document.querySelector('#status').innerText = "Turn For    " + current
                }
            }
        })
    }
 }
}

const changeplay = ()=>{
    return current === "X"? "O" :"X"
}

const checkWin = (boxPlay)=>{

    //console.log(boxPlay);
   for (let index = 0; index < boxPlay.length; index++) {
    //console.log(boxPlay[index][1]);
        if (boxPlay[index][0] === boxPlay[index][1] && boxPlay[index][1] === boxPlay[index][2] && boxPlay[index][0] !== ""){
            document.querySelector('#status').innerText = changeplay() + "    is Win"
            continuePlay = true
        
        } else if (boxPlay[0][index] === boxPlay[1][index] && boxPlay[0][index] === boxPlay[2][index] && boxPlay[0][index] !== ""){
            document.querySelector('#status').innerText = changeplay() + "    is Win"
            continuePlay = true
        }
    }

    if (boxPlay[0][0]=== boxPlay[1][1]&& boxPlay[1][1]=== boxPlay[2][2] && boxPlay[0][0] && boxPlay[0][0] !== ""){
        document.querySelector('#status').innerText = changeplay() + "    is Win"
        continuePlay = true
    } else if ( boxPlay[0][2] === boxPlay[1][1]&& boxPlay[1][1] === boxPlay[2][0] && boxPlay[0][2]!==""){
        document.querySelector('#status').innerText = changeplay() + "    is Win"
            continuePlay = true

    }
    
}


const restart = document.querySelector('#restart')
restart.addEventListener('click',()=>{
          let box = document.querySelectorAll('.Box')
          box.forEach(element => {
            element.innerText = ""
          });
          document.querySelector('#status').innerText = "Keep fighting !"
    });



render(boxPlay)



// last funtion will be created for more features,
// transfore to new screen will one win!
// Screen contains the name of player + button to play again

// You can just dis-click on the box when containPlay false!






// [i][0]===[1]===[2]
// [0][0]===[1][0]===[2][0]
// [0][1]===[1][1]===[2][1]
// [0][2]===[1][2]===[2][2]

// const block = document.createElemnt("div")
// block.classList.add("Box")

//const element= document.querySelectorAll('.Box')
/* const status = document.querySelector('#status')
const restart = document.querySelector('#restart')



const picture_O = ' <img src="./O Letter.png"> '
/*  *//* 
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