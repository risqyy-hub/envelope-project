function openEnvelope() {
    document.querySelector('.flap').style.transform = "rotateX(180deg)";
    document.querySelector('.letter').style.opacity = "1";
}

function closeEnvelope() {
    document.querySelector('.flap').style.transform = "rotateX(0deg)";
    document.querySelector('.letter').style.opacity = "0";
}