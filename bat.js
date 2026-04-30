function createBat() {
    const bat = document.createElement('div');
    bat.className = 'bat';
    bat.innerText = '🦇';
    
    // Posiciones y tiempos aleatorios
    bat.style.left = Math.random() * 100 + "vw";
    bat.style.top = "110vh"; // Empiezan desde abajo
    
    const duration = Math.random() * 5 + 5; // Entre 5 y 10 segundos
    bat.style.animationDuration = duration + "s";
    bat.style.opacity = Math.random();
    
    document.getElementById('bat-container').appendChild(bat);
    
    // Limpiar el murciélago después de que termine la animación
    setTimeout(() => {
        bat.remove();
    }, duration * 1000);
}

// Crear un murciélago cada 1.5 segundos
setInterval(createBat, 1500);