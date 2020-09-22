let ul = document.querySelectorAll('li');

let numbers = new Array();
let a=0;
let b=0;
numbers[b] = new Array();
let count = 1;
let shuffled;

const setClicked = () => {
    
    ul.forEach((item) => {
        if(!item.innerText) {
            item.setAttribute("onclick", `move(${item.innerText});` );
            item.setAttribute("class", "empty");
        }
        else{
            item.setAttribute("onclick",`move(${item.innerText});` );
        }
        return;
    })
}



const move = (id) => {
    
    let result = getIndexOfId(id);
    let a = result[0];
    let b= result[1];
    let right = result[1] + 1;
    let left = result[1]-1;
    let up = result[0]-1;
    let down = result[0]+1;
    if(right < shuffled[0].length && right >= 0){
        swapSide(a,b,right,id);
    }
    if(left < shuffled[0].length && left >= 0){
        swapSide(a,b,left,id);
    }
    
    if(down < shuffled.length && down >= 0){
        swapDirection(a,b,down,id);
    }
    if(up < shuffled.length && up >= 0)
    {
        swapDirection(a,b,up,id);
    }
    
    checkIfTrue();
       
}
let item1;
let item2;

function swapSide(a,b,side,id){
    
    
    if(shuffled[a][side] == ' '){
        shuffled[a][side] = id;
        shuffled[a][b]= ' ';
        ul.forEach((item) =>{
            if(item.className == 'empty'){
                item1 = item;
                
                
            }
        });
        ul.forEach((item) =>{
            if(item.innerText == id){
                item2 = item;
                
            }
        });
        item1.innerText = id;
        item1.className = ' ';
        item2.innerText = ' ';
        item2.className = 'empty';
        item1.setAttribute("onclick", `move(${item1.innerText});` );
        item2.setAttribute("onclick", `move(${item2.innerText});` );

    }
}

function swapDirection(a,b,direction,id){
    if(shuffled[direction][b] == ' '){
        shuffled[direction][b] = id;
        shuffled[a][b]= ' ';
        ul.forEach((item) =>{
            if(item.className == 'empty'){
                item1 = item;
                
                
            }
        });
        ul.forEach((item) =>{
            if(item.innerText == id){
                item2 = item;
                
            }
        });
        item1.innerText = id;
        item1.className = ' ';
        item2.innerText = ' ';
        item2.className = 'empty';
        item1.setAttribute("onclick", `move(${item1.innerText});` );
        item2.setAttribute("onclick", `move(${item2.innerText});` );

    }

}

function getIndexOfId(id) {
    for (let i = 0; i < shuffled.length; i++) {
        for(let j=0; j<shuffled.length; j++){
            if(shuffled[i][j]== id){
                return [i,j];
            }
        }
    }
  }


function setUp() {
    createList();
    fillGrid();
    setId(ul);
    setClicked();
    checkIfTrue();

}

function checkIfTrue(){
    let win = true;
    let countNum = 1;
    for(let i =0; i< (ul.length)-1; i++){
        if(ul[i].innerText == `${countNum}`){
            ul[i].className = "win"; 
        }
        else{
            win = false;
        }
        countNum++;
    }
    console.log(win)
    if(win){
        alert('win');
    }
    
}
function createList(){
    
    for(let i =0; i <3;i++){ 
        numbers[a] = new Array();
        b=0;
        for(let j=0; j<3;j++){
            let strNum = `${count}`;
            if(count == 9){
                numbers[a][b]=' ';
            }
            else{
                numbers[a][b] = strNum;
                b++;
                count++;
            }
            
            
        }
        a++;
    }
}


const setId = () => {
    let count =0;
    for(let i = 0; i < numbers.length; i++) {
        for(let j=0; j< numbers[i].length; j++){
            ul[count].setAttribute("id", `${count}`);
            count++;
        }
            
    }   
}
    

const shuffle = (arr) => {
    const copy = [...arr];
    for(let i = 0; i < copy.length; i++) {
        for(let j=0; j<copy[i].length; j++){
            let indexA = parseInt(Math.random()*copy.length);
            let indexB = parseInt(Math.random()*copy[i].length);
            let temp = copy[i][j];
            copy[i][j] = copy[indexA][indexB];
            copy[indexA][indexB] = temp;
        }
    }
    return copy;
 }

 
 
 const fillGrid = () => {
    shuffled = shuffle(numbers);
    let count =0;
        for(let i =0; i<3; i++){
            for(let j=0; j<3; j++){
                ul[count].innerText = shuffled[i][j];
                count++;
            }
        }
        
}



fillGrid();




