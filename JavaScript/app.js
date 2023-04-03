let i = 0;
let images = [];
let time = 9000;

images[0] = './imgs/slide1.jpeg';
images[1] = './imgs/slide2.jpg';
images[2] = './imgs/slide3.jpg';
images[3] = './imgs/slide4.jpeg';
console.log(images);
let div1 = document.getElementById("slideShow");
console.log(div1)
const imgEl = document.createElement("img");
changeImg()
function changeImg(){
    imgEl.src =images[i];
    console.log(imgEl)
    div1.appendChild(imgEl);

  if (i <images.length){
    i++;
  }
  else {
    i = 0;
  }
    setInterval(changeImg ,time);
}



