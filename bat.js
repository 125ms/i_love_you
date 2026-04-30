function createBat() {
    const bat = document.createElement('div');
    bat.className = 'bat';
    bat.innerText = '🦇';
    
   
    bat.style.left = Math.random() * 100 + "vw";
    bat.style.top = "110vh"; 
    
    const duration = Math.random() * 5 + 5; 
    bat.style.animationDuration = duration + "s";
    bat.style.opacity = Math.random();
    
    document.getElementById('bat-container').appendChild(bat);
    
   
    setTimeout(() => {
        bat.remove();
    }, duration * 1000);
}


setInterval(createBat, 1500);
