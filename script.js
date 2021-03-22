const container = document.getElementById("container");

for (i=0; i < 256;i++){
   var square  = document.createElement('div');
   square.classList.add('squares');
   square.style.cssText = "border: 1px solid black; background: white; width: 6%; height: 3rem" 
   square.addEventListener('mouseover', (e) => {
      e.target.style.background="green";
    });
    
   container.appendChild(square);
  
  
}




