function addNotes() {
    console.log('test');
    const container = document.getElementById('container');
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');

    function displayImages(event) {
      const files = event.target.files;

      const imageSession = document.createElement('div');
      imageSession.classList.add('imageSession');

      const imageSessionTitle = document.createElement('div');
      imageSessionTitle.classList.add('imageSessionTitle');
      imageSessionTitle.textContent = titleInput.value;
      imageSession.appendChild(imageSessionTitle);

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('imageContainer');

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.onclick = function() {
            showFullImage(e.target.result);
          };
          imageContainer.appendChild(img);
        };
        reader.readAsDataURL(files[i]);
      }

      imageSession.appendChild(imageContainer);
      container.appendChild(imageSession);
    }

    function showFullImage(imageSrc) {
      // Hide all images
      const images = document.querySelectorAll('.imageContainer img');
      images.forEach(image => {
        image.style.display = 'none';
      });

      // Display the full image
      fullImage.src = imageSrc;
      fullImageContainer.style.display = 'flex';
    }

    function closeImage() {
      // Show all images
      const images = document.querySelectorAll('.imageContainer img');
      images.forEach(image => {
        image.style.display = 'block';
      });

      // Hide the full image
      fullImageContainer.style.display = 'none';
    }
}
    