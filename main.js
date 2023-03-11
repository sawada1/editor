let saturate = document.getElementById('saturate');
let grayscale = document.getElementById('greyscale');
let hue_rotate = document.getElementById('hue-rotate');
let bright = document.getElementById('brightness');
let contrast = document.getElementById('contrast');
let sepia = document.getElementById('sepia');
let blur = document.getElementById('blur');
let upload = document.getElementById('upload');
let download = document.getElementById('download');
let img = document.getElementById('img');
let reset = document.querySelector('span');
let img_box = document.getElementById('img-box');


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

function reset_values(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    bright.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';
}
window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    img_box.style.display = 'none';
}
upload.onchange = function(){
    reset_values();
    download.style.display = 'block';
    reset.style.display = 'block';
    img_box.style.display = 'block';
    let file = new FileReader;
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width , canvas.height);
        img.style.display = 'none';
    }
};
let filters = document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input', function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${bright.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width , canvas.height);
    });
} );

download.onclick = function(){
    download.href = canvas.toDataURL();
}