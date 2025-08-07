document.getElementById('confete').addEventListener('click', function () {
    const btn = document.getElementById('confete');
    const rect = btn.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 300,
      spread: 200,        
      startVelocity: 25,  
      scalar: 1.2,       
      ticks: 300,         
      origin: { x: x, y: y }
    });
  });
