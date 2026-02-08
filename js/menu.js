document.getElementById('playBtn').addEventListener('click', () => {
    // Lance le jeu
    window.location.href = 'game.html';
});

document.getElementById('levelSelectBtn').addEventListener('click', () => {
    alert('Sélection de niveaux - À venir !');
    // Plus tard: window.location.href = 'levels.html';
});

document.getElementById('optionsBtn').addEventListener('click', () => {
    showOptions();
});

document.getElementById('tutorialBtn').addEventListener('click', () => {
    alert('Tutoriel:\n\nESPACE = Saut\nSHIFT = Altération (Dash/Inversion gravité/Phase)\n\nCollecte les orbes pour changer ton pouvoir d\'altération !');
});

function showOptions() {
    const optionsHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: rgba(0, 0, 0, 0.9); padding: 40px; border-radius: 20px; 
                    color: white; z-index: 1000; border: 3px solid white;">
            <h2 style="margin-bottom: 20px;">OPTIONS</h2>
            <label style="display: block; margin: 15px 0;">
                <input type="checkbox" id="soundToggle" checked> Activer le son
            </label>
            <label style="display: block; margin: 15px 0;">
                Volume: <input type="range" id="volumeSlider" min="0" max="100" value="70">
            </label>
            <button onclick="this.parentElement.remove()" 
                    style="margin-top: 20px; padding: 10px 30px; font-size: 1.2rem; 
                           cursor: pointer; background: #667eea; color: white; border: none; 
                           border-radius: 10px;">
                FERMER
            </button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', optionsHTML);
}

// Animation de fond
function createBackgroundEffect() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        document.body.appendChild(particle);
    }
}

// animation de particules flottantes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-40px) translateX(-10px); }
        75% { transform: translateY(-20px) translateX(5px); }
    }
`;
document.head.appendChild(style);

createBackgroundEffect();
