function showSurprise() {
    // Display message
    document.getElementById('message').style.display = 'block';
    
    // Play sound effect
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // You can replace with any sound
    audio.play();
  
    // Show confetti
    createConfetti();
  }
  
  function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';
  
    // Confetti center position
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    // Generate confetti pieces
    for (let i = 0; i < 150; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      
      // Random angle and distance for spreading out from the center
      const angle = Math.random() * 360;
      const distance = Math.random() * 300 + 200; // Random distance from center
      const x = distance * Math.cos(angle); // X direction
      const y = distance * Math.sin(angle); // Y direction
      
      // Apply the random position as CSS variables
      confettiPiece.style.setProperty('--x', `${x}px`);
      confettiPiece.style.setProperty('--y', `${y}px`);
      
      // Random color for each confetti piece
      const randomColor = getRandomColor();
      confettiPiece.style.backgroundColor = randomColor;
  
      confettiContainer.appendChild(confettiPiece);
  
      // Set a timeout to remove the confetti after animation
      setTimeout(() => {
        confettiPiece.remove();
      }, 2000); // Remove after animation ends
    }
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  