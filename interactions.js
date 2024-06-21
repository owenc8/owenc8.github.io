// function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }



document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const overlay = document.getElementById("overlay");
  const largeImage = document.getElementById("largeImage");

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function() {
          largeImage.src = thumbnail.src;
          overlay.style.display = "flex";
      });
  });

  overlay.addEventListener("click", function() {
      overlay.style.display = "none";
  });
});