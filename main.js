const button = document.querySelector(".bos");

button.onclick = () => {
    const body = document.querySelector(".body");
    const a = document.querySelector(".box")
    const txt = document.querySelector(".h1")
    body.style.backgroundColor = "#f009";
    body.style.transition = "0.4s";
    a.style.borderColor = "#0f0"
    txt.style.color = "#0f0"
};


const butto = document.querySelector(".bos2");

butto.onclick = () => {
    const bod = document.querySelector(".body");
    const txt = document.querySelector(".h1")
    const a = document.querySelector(".box")
    bod.style.backgroundColor = "#ff09";
    bod.style.transition = "0.7s";
    a.style.borderColor = "#000"
    txt.style.color = "#000"
};


const butt = document.querySelector(".bos3");

butt.onclick = () => {
    const bo = document.querySelector(".body");
    const ao = document.querySelector(".box")
    const txt = document.querySelector(".h1")
    bo.style.backgroundColor = "#0f09";
    bo.style.transition = "0.7s";
    ao.style.borderColor = "#f00"
    txt.style.color = "#f00"
};

const but = document.querySelector(".bos4");

but.onclick = () => {
    const b = document.querySelector(".body");
    const a = document.querySelector(".box")
    const txt = document.querySelector(".h1")
    a.style.borderColor = "#ff0"
    a.style.transition = "0.4s";
    b.style.backgroundColor = "#000e";
    b.style.transition = "0.7s";
    txt.style.color = "#ff0"
    txt.style.transition = "0.4s";
};