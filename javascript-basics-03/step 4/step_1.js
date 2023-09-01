const imageElement = document.querySelectorAll("img");
for(let i=0;i<imageElement.length ;i++){
    imageElement[i].addEventListener("mouseover", function(){
        imageElement[i].src=`images/image${i+1}_2.jpg`
    });
      imageElement[i].addEventListener("mouseout", function(){
        imageElement[i].src=`images/image${i+1}.jpg`
    });
}