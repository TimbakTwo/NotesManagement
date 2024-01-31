
function addSubjectCategory() {

     // Create the outer div
  const popupDiv = document.createElement('div');
  popupDiv.id = 'popup';
  popupDiv.className = 'popup';

  // Create the inner div
  const popupContentDiv = document.createElement('div');
  popupContentDiv.className = 'popup-content';

  // Create the input element
  const inputElement = document.createElement('input');
  inputElement.id = 'addNameCategInput'
  inputElement.type = 'text';
  inputElement.className = 'renameInput';
  inputElement.placeholder = 'Enter Subject Name';

  // Create the button
  const addButton = document.createElement('button');
  addButton.className = 'add_name_button';
  addButton.innerHTML = '+';
  addButton.addEventListener("click", function() {

    const subCategoryName = document.getElementById('addNameCategInput');

    // Append the new subject category

    // Get the target element where you want to append the new HTML
const subCategGroup = document.querySelector('.subCategGroup');

// Create the new div element
const newDiv = document.createElement('div');
newDiv.className = 'subCateg';

// Create the book logo element
const bookLogoElement = document.createElement('img');
bookLogoElement.classList.add('bookLogo')
bookLogoElement.src = "icons/bookIcon.png";

// Append the image book logo inside the new div
newDiv.appendChild(bookLogoElement)

// Create the label element
const labelElement = document.createElement('label');
labelElement.textContent = subCategoryName.value;

// Append the label to the new div
newDiv.appendChild(labelElement);
// This are the your added categories array list 
const CATEGORIES = [];


// Append the new div to the subCategGroup
subCategGroup.appendChild(newDiv);

    //

    const popupElement = document.getElementById('popup');
    if (popupElement) {
    // Remove the popup element from its parent (in this case, the body)
    document.body.removeChild(popupElement);
  }
  })

  // Append elements to the inner div
  popupContentDiv.appendChild(inputElement);
  popupContentDiv.appendChild(addButton);

  // Append the inner div to the outer div
  popupDiv.appendChild(popupContentDiv);

  // Append the popup div to the document body
  document.body.appendChild(popupDiv);


}