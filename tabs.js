function openChapter(nbChap) {
    var i;
    var x = document.getElementsByClassName("Chapitre");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(nbChap).style.display = "block"; 
  }