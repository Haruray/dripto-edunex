document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    var timer = 1000;
    var intervalId = window.setInterval(function(){
        console.log("tes");
        var images = document.getElementsByClassName("relative card-image-wrapper");
        var imageLink = "https://cdn.discordapp.com/attachments/601751285896708096/1069590805863477358/dripto.png"
        for (var i = 0 ; i < images.length ; i++){
            var courseImage = images[i].getElementsByTagName("img")[0];
            courseImage.src = imageLink
        }
        if (images.length > 0){
            timer = 5000;
        }
      }, timer);
    
  });