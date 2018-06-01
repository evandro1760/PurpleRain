
function createPurple(purples, num){
    
    let purple = document.createElement('div');
    
    purple.classList.add('purple');
    purple.classList.add('p' + num);
    purples.appendChild(purple);

    return purple;
}

function dropPurple(purple){
    
    let top = Math.random() * -85;
    let left = Math.random() * 95;

    let timer = setInterval(function(){
        purple.style.top = top + '%';
        purple.style.left = left + '%';
        top += 0.5;
        if(top >= 90){
            top = Math.random() * -5;
            left = Math.random() * 95;
        }
    }, 16);
}


let purples = document.querySelector('.purples');
let n = 500;

for(let i = 0; i < n; i++){
    dropPurple(createPurple(purples, i));
}
