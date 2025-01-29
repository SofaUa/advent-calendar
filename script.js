function toggleImage (button, imgsrc){
    const img = button.querySelector("img");
    if (img){
        if(img.classList.contains("hidden")){
          img.src = imgsrc;
          img.classList.remove("hidden");
          button.classList.add("open");
        }else{
            img.classList.add("hidden");
            button.classList.remove("open");
        }
    }else{
        const newImage= document.createElement("img");
        newImage.src = imgsrc;
        newImage.classList.add("hidden");
        button.appendChild(newImage);
        newImage.classList.remove("hidden");
        button.classList.add("open");
    }
}