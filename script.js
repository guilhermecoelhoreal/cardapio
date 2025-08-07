  // 1. Bloqueia gesto de pinça (zoom com dois dedos), inclusive durante scroll
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
  document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
  });
  document.addEventListener('gestureend', function (e) {
    e.preventDefault();
  });

  // 2. Bloqueia zoom com dois dedos (touchmove com múltiplos toques)
  document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 3. Bloqueia duplo toque (double tap para zoom)
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (e) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // 4. Bloqueia toque longo (que abre seleção ou menu copiar/colar), mas sem bloquear botões
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Bloqueia menu de contexto
  });

  // 5. Apenas bloqueia toque longo em elementos específicos (ex: com a classe .no-touch-hold)
  document.addEventListener('touchstart', function (e) {
    if (e.target.closest('.no-touch-hold')) {
      e.preventDefault(); // impede toque longo só nesse grupo
    }
  }, { passive: false });
