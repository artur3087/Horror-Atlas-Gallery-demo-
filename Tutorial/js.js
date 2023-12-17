// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var col = ['a.jpeg', 'b.jpeg', 'c.jpg'];
var i = 0;
const slider = document.querySelectorAll(".slider img");
const displayImage = document.getElementById("displayImage"); 


const container = document.getElementById("img-box");

function prev(){
	if(i <= 0) i = col.length;	
	i--;	
     displayImage.setAttribute('src', "images/"+col[i]);    
}

function next(){
	if(i >= col.length-1) i = -1;
	i++;
     displayImage.setAttribute('src', "images/"+col[i])		 
}

 function prev2 () {document.addEventListener('keydown', (e) => {
     e = e || window.event;
     if (e.keyCode === 37) {
       console.log('left arrow pressed');
       if(i <= 0) i = col.length;	
	i--;	
     displayImage.setAttribute('src', "images/"+col[i]);
     }
   })
     
        }
 prev2();

 function next2 () {document.addEventListener('keydown', (e) => {
     e = e || window.event;
     if (e.keyCode === 39) {
       console.log('right arrow pressed');
       if(i >= col.length-1) i = -1;
	i++;
     displayImage.setAttribute('src', "images/"+col[i])

     }
   })
     
        }
 next2();


slider.forEach(function (ch) {
    ch.addEventListener("click", function () {
      displayImage.src = ch.src;
      
    });
  });
