
const particles = [];
const smokeParticles = [];
const particleCount = 10;

let isGasLighterOn = false;


function getRandomColor() {
    const colors = ['orange', 'yellow', 'red','purple','blue' , 'cyan', 'green']; // List of possible colors
    return colors[Math.floor(Math.random() * colors.length)];
}


for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);


    particle.x = Math.random() * window.innerWidth;
    particle.y = Math.random() * window.innerHeight;

    
    particle.speedX = (Math.random() - 0.5) * 2;
    particle.speedY = (Math.random() - 0.5) * 2;

   
    particle.style.backgroundColor = getRandomColor();

    particles.push(particle);
}





function updateParticles() {
    if (isGasLighterOn) return; 

    
    particles.forEach(particle => {
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;

       
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.y > window.innerHeight) particle.y = 0;
        if (particle.y < 0) particle.y = window.innerHeight;

        
        particle.style.left = particle.x + 'px';
        particle.style.top = particle.y + 'px';
    });

 
}


document.getElementById('cbtest-19').addEventListener('change', (event) => {
    isGasLighterOn = event.target.checked;

    if (isGasLighterOn) {
        
        particles.forEach(particle => {
            particle.style.opacity = '0';
        });
    } else {
       
        particles.forEach(particle => {
            particle.style.opacity = '1';
        });
    }
});


function animate() {
    updateParticles();
   
    requestAnimationFrame(animate);
}

animate();

function goBack() {
    window.location.href = "index.html";
}