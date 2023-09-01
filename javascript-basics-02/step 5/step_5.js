// const image1Element = document.querySelector("#image1");
// image1Element.addEventListener("mouseover", function() {
//     image1Element.src = "images/image1_2.jpg"; 
// });
// const image2Element = document.querySelector("#image2");
// image2Element.addEventListener("mouseover", function() {
//     image2Element.src = "images/image2_2.jpg"; 
// });
// const image3Element = document.querySelector("#image3");
// image3Element.addEventListener("mouseover", function() {
//     image3Element.src = "images/image3_2.jpg"; 
// });
// const image4Element = document.querySelector("#image4");
// image4Element.addEventListener("mouseover", function() {
//     image4Element.src = "images/image4_2.jpg"; 
// });
// const image5Element = document.querySelector("#image5");
// image5Element.addEventListener("mouseover", function() {
//     image5Element.src = "images/image5_2.jpg"; 
// });

const imageElement = document.querySelectorAll("img");
for(let i=0;i<imageElement.length ;i++){
    imageElement[i].addEventListener("mouseover", function(){
        imageElement[i].src=`images/image${i+1}_2.jpg`
    })
}