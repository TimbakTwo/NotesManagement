function showGUI() {
    const gui = createGUI();
  
    // Append the GUI to the body
    document.body.appendChild(gui);
  
    // Blur the website content
    const contentElements = document.querySelectorAll('body > *:not(.gui)');
    for (const element of contentElements) {
      element.classList.add('blur');
    }
  }
  
  function createGUI() {
    const gui = document.createElement('div');
    gui.classList.add('gui');
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.classList.add('closeButton');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(gui);
  
      // Remove blur from website content
      const contentElements = document.querySelectorAll('body > *:not(.gui)');
      for (const element of contentElements) {
        element.classList.remove('blur');
      }
    });
  
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    titleLabel.classList.add('titleLabel');
  
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('titleInput');
  
    const imagesLabel = document.createElement('label');
    imagesLabel.innerHTML = 'Select images:';
    imagesLabel.classList.add('imagesLabel');
  
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.multiple = true;
  
    const enterButton = document.createElement('button');
    enterButton.innerText = 'Enter';
    enterButton.classList.add('enterButton');
    enterButton.addEventListener("click",addNotes())
        
  
    // Append elements to the GUI
    gui.appendChild(closeButton);
    gui.appendChild(titleLabel);
    gui.appendChild(titleInput);
    gui.appendChild(imagesLabel);
    gui.appendChild(imageInput);
    gui.appendChild(enterButton);
  
    return gui;
  }
  