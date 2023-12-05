var rockImage = document.getElementsByClassName("rock")[0];
var paperImage = document.getElementsByClassName("paper")[0];
var scissorsImage = document.getElementsByClassName("scissors")[0];
var imagecontainer = document.getElementsByClassName("image__container")[0];
var resulttext = document.getElementById('result');

var randomValue =objects[ Math.floor(Math.random()*objects.length)];//generate random object





function reset() {
    setTimeout("location.reload(true);", 6000);
  }






rockImage.addEventListener('click',()=>{
    var paper = paperImage;
    if(randomValue.name=="paper"){
        rockImage.src=randomValue.image; //this is where the computer chooses
        paper.remove();// remove the image to replace it with a text
       var text = document.createElement("h3");
       text.innerHTML="YOU LOST!"
       text.style.color="red";//after the image to put the text in the middle of the images
       rockImage.after(text);
        scissorsImage.src = "./images/istockphoto-1288973456-170667a.jpg" ;
        resulttext.innerHTML=" ";
}

 else if(randomValue.name=="scissors"){
    rockImage.src=randomValue.image;
    paper.remove();
   var text = document.createElement("h3");
   text.innerHTML="YOU WIN!"
   text.style.color="darkgreen";
   rockImage.after(text);
   scissorsImage.src = "./images/istockphoto-1288973456-170667a.jpg" ;
   resulttext.innerHTML=" ";
}
else{
    rockImage.src=randomValue.image;
    paper.remove();
   var text = document.createElement("h3");
   text.innerHTML="You are Tie"
   text.style.color="darkorange";
   rockImage.after(text);
   scissorsImage.src = "./images/istockphoto-1288973456-170667a.jpg" ;
   resulttext.innerHTML=" ";
}
})

reset();


paperImage.addEventListener('click',()=>{
    var paper = paperImage
        if(randomValue.name=="paper"){
      rockImage.src=randomValue.image;
        paper.remove();
       var text = document.createElement("h3");
       text.innerHTML="You are Tie"
       text.style.color="darkorange";
       rockImage.after(text);
       scissorsImage.src = "./images/paper.jpg" ;
       resulttext.innerHTML=" ";
    }
    
     else if(randomValue.name=="scissors"){
        rockImage.src=randomValue.image;
        paper.remove();
       var text = document.createElement("h3");
       text.innerHTML="YOU LOST!"
       text.style.color="red";
       rockImage.after(text);
        scissorsImage.src = "./images/paper.jpg" ;
        resulttext.innerHTML=" ";
    }
    else{
        rockImage.src=randomValue.image;
        paper.remove();
       var text = document.createElement("h3");
       text.innerHTML="YOU WIN!"
       text.style.color="darkgreen";
       rockImage.after(text);
       scissorsImage.src = "./images/paper.jpg" ;
       resulttext.innerHTML=" ";
    }






})
reset();

scissorsImage.addEventListener('click',()=>{
    var paper = paperImage
    if(randomValue.name=="paper"){
        rockImage.src=randomValue.image;
        paper.remove();
       var text = document.createElement("h3");
       text.innerHTML="YOU WIN!"
       text.style.color="darkgreen";
       rockImage.after(text);
       scissorsImage.src = "./images/scissors.jpg" ;
       resulttext.innerHTML=" ";
}



 else if(randomValue.name=="scissors"){
    rockImage.src=randomValue.image;
        paper.remove();
       var text = document.createElement("h3");
       text.innerHTML="You are Tie"
       text.style.color="darkorange";
       rockImage.after(text);
       scissorsImage.src = "./images/scissors.jpg" ;
       resulttext.innerHTML=" ";
}
else{
    rockImage.src=randomValue.image;
    paper.remove();
   var text = document.createElement("h3");
   text.innerHTML="YOU LOST!"
   text.style.color="red";
   rockImage.after(text);
    scissorsImage.src = "./images/scissors.jpg" ;
    resulttext.innerHTML=" ";
}











})
reset();