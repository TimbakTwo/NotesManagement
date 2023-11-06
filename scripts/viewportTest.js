function updateViewportInfo() {
    // temporary disabler code
    return;


    const viewportInfo = document.getElementById('viewport-info');
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewportInfo.textContent = `Viewport dimensions: ${width}`;
  }
  
  // Update viewport dimensions initially and whenever the window is resized
  updateViewportInfo();
  window.addEventListener('resize', updateViewportInfo);

  ////

  if (window.innerWidth > 764) {
    document.getElementById('subNav').style.display = "block";
  }