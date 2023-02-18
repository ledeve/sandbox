
const button = document.querySelector('#button-color');

button.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 30 + 160);
    const g = Math.floor(Math.random() * 30 + 200);
    const b = Math.floor(Math.random() * 30 + 210);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    const div = document.createElement("div");
    div.classList.add('color-div');
    console.log(div.className);
    const par = document.createElement("p");
    const text = document.createTextNode(newColor);
    par.appendChild(text);
    div.appendChild(par);
    div.style.backgroundColor = newColor;
    document.body.appendChild(div);
})