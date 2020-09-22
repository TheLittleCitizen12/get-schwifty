let ul = document.querySelectorAll('li');
const numbers = ['1','2','3','4','5','6','7','8',' '];

function setUp() {
    fillGrid(ul, numbers);
    setId(ul);
    setClicked(ul);

}


const getState = (items) => {
    const content = [];
    items.forEach((item, i) => {
        content.push(item.innerText)
    });
    return content;
}

const setId = (items) => {
    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute("id", `li${i}`)
    }
}

const shuffle = (arr) => {
    const copy = [...arr];
    // loop over the array
    for(let i = 0; i < copy.length; i++) {
        // for each index,i pick a random index j 
        let j = parseInt(Math.random()*copy.length);
        // swap elements at i and j
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
 }

 
 
 const fillGrid = (items, letters) => {
    let shuffled = shuffle(letters);

    items.forEach((item, i) => {
        item.innerText = shuffled[i];
    })
}



fillGrid(ul, numbers);

const setClicked = (items) => {
    
    items.forEach((item) => {
        if(!item.innerText) {
            item.setAttribute("onclick", `test(${item.innerText});` );
            item.setAttribute("class", "empty");
        }
        else{
            item.setAttribute("onclick",`test(${item.innerText});` );
        }
        return;
    })
}


const test = (id) => {
    console.log(id);
    ul[7].innerText = id;
    
}


