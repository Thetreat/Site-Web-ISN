function openChapter(nbChap) {
  var x = document.getElementsByClassName("Chapitre");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(nbChap).style.display = "block";
}