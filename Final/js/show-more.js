function myFunction() {
    var moreImg = document.getElementById("moreImg");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (moreImg.style.display === "none") {
      moreImg.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    } else {
      moreImg.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  }