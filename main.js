const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if (className != "white-theme") {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }
    console.log('current class name: ' + className);
});

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/chrome.png') {
        myImage.setAttribute ('src','img/edge.png');
    } else {
        myImage.setAttribute('src', 'img/firefox.png');
    } if(mySrc === 'img/firefox.png') {
        myImage.setAttribute ('src','img/chrome.png');
    }
}