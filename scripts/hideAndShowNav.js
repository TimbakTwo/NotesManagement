if (window.innerWidth < 764) {
    hideNav();
}

function hideNav() {
document.getElementById('subNav').style.display = "none";

const divElement = document.createElement('div');

divElement.textContent = '>';
divElement.style.position = 'fixed';
divElement.style.top = '0';
divElement.style.width = '45px'; // Adjust width as needed
divElement.style.height = '50px'; // Adjust height as needed
divElement.style.color = "white";
divElement.style.fontSize = "53px";
divElement.style.fontFamily = "'Roboto', sans-serif";
divElement.style.left = "25px";
divElement.style.userSelect = "none";
divElement.style.cursor = "pointer";

divElement.addEventListener("click", function() {
    document.getElementById('subNav').style.display = "inline";
    divElement.style.display = "none";
});

document.body.appendChild(divElement);
}








// <div class="showUnshow_nav"><label><</label></div>