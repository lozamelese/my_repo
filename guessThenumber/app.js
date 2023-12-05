var result = document.getElementById("result_para");
var input = document.getElementsByClassName('input')[0];
var yes_btn = document.getElementsByClassName('green')[0];
var no_btn = document.getElementsByClassName('red')[0];
var even_btn = document.getElementsByClassName('even')[0];
var single_btn = document.getElementsByClassName('single')[0];


var random = Math.floor(Math.random()*20);
var countGuess = 0;


console.log(random);
console.log(result.toString().length);
function refresh (){
    input.value=""

    


}
let mySound = new Audio('./sound/correct-38597.mp3')



even_btn.addEventListener('click',()=>{
    if(random%2==0){
        yes_btn.style.color = 'green';
        yes_btn.style.fontWeight=700;
        yes_btn.style.fontSize="20px";
        mySound.volume=0.2;
        mySound.play()
    }
    else{
     
        no_btn.style.color = 'red';
        no_btn.style.fontWeight=700;
        no_btn.style.fontSize="20px";
        mySound.volume=0.2;
        mySound.play()
    }
   
    single_btn.disabled=true;
    single_btn.style.backgroundColor='grey'
    single_btn.classList.remove('active')

})

single_btn.addEventListener('click',()=>{
    if(random.toString().length<2){
        yes_btn.style.color = 'green';
        yes_btn.style.fontWeight=700;
        yes_btn.style.fontSize="20px";
        mySound.volume=0.2;
        mySound.play()

    }
    else{
        no_btn.style.color = 'red'
        no_btn.style.fontWeight=700;
        no_btn.style.fontSize="20px";
        mySound.volume=0.2;
        mySound.play()
    }
    even_btn.disabled=true;
    even_btn.style.backgroundColor='grey'
    even_btn.classList.remove('active')
})

function resultFun (){


  var val = input.value;//get the user value

  const para = document.createElement('h1');
  result.appendChild(para);
  para.innerText="";
 
console.log();
  
if(isNaN(val)){
    para.innerText="please enter a number"
    countGuess+=1;
}
if(!isNaN(val)){
if(val == random){
    para.innerText='You got it'
}
else if(val<random){
    para.innerText="Go higher"
    countGuess+=1;
}

else{
    para.innerText="Go lower"
    countGuess+=1;
    console.log(para.innerText.length);
}

  
}
if(para.innerText.length!=0){
   document.getElementsByClassName('submit')[0].addEventListener('click',()=>{
    para.innerText=''
    
   })
   document.getElementsByClassName('reset')[0].addEventListener('click',()=>{
    para.innerText = ''
   })
   if(countGuess==3) {
    para.innerText='Your guess is over. The number is '+ random;
}

}

}


