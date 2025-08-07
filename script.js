document.getElementById('confete').addEventListener('click', function (e) {
    const btn = document.getElementById('confete');
    const rect = btn.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: x, y: y }
    });
  });
