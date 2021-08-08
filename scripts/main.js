// Function for image changer
let webImage = document.querySelector('img');
webImage.onclick = function() {
    let webSrc = webImage.getAttribute('src');
    if(webSrc === 'img/teacher-5662610_1280.png') {
        webImage.setAttribute('src', 'img/teacher-5602475_1280.png');
    } else {
        webImage.setAttribute('src', 'img/teacher-5662610_1280.png');
    }
}

// Personalized welcome message
let userButton = document.querySelector('button');
let userHeading = document.querySelector('h2');
function setUserName() {
    let userName = prompt('Пожалуйста, введите свое имя...');
    if(!userName){
        setUserName();
    } else {
        localStorage.setItem('name', userName);
        userHeading.textContent = 'Привет, ' + userName + ', немного обо мне';
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storageName = localStorage.getItem('name');
    userHeading.textContent = 'Привет, ' + storageName + ', немного обо мне';
}
userButton.onclick = function() {
    setUserName();
}