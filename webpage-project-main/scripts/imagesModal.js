const numOfPictures=39
var overallNumber=1


const imageContainer = document.getElementById("my-image-container");

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `..\\images\\Daruvar\\${i}.jpg`;
  img.onclick = () => openModal(i);
  imageContainer.appendChild(img);
}

/*
function createDivs(){

    for (let i=1;i<=numOfPictures;i++){

        const box = document.createElement("div");
        box.className('mySlides')

    const box2= document.createElement("div")
    box2.className('numbertext')

    
}
}
 var overallNumber=1

function imgInit(city, numInFolder){
for(let i=1;i<numInFolder;i++){
    var img = document.createElement('img');
    img.innerHTML=`
    <img src="..\images\(${city})\(${numInFolder}).jpg" onclick="openModal(); currentSlide(${overallNumber})" loading="lazy"/>
    `
    /*
    img.src = '..\images\%{city}\%{i}.jpg';
    img.loading="lazy";
    img.onclick= "openModal();currentSlide(overallNumber);"
    overallNumber+=overallNumber+1;
    document.getElementsByClassName('gallery').appendChild(img);
}

}

*/


