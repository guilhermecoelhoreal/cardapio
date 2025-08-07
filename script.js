document.getElementById('confete').addEventListener('click', function () {
    const btn = document.getElementById('confete');
    const rect = btn.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 400,
      spread: 360,        
      startVelocity: 25,  
      scalar: 1.2,       
      ticks: 100,         
      origin: { x: x, y: y }
    });
  });
