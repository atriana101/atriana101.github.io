var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://blmak.github.io/BigMusicClubConclomerateDates.json');
  ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].artist + " will perform on " + data[i].date + 
    " in " + data[i].city + data[i].state + " at " + data[i].show_time +
    " PRICE - " + data[i].price + data[i].currency + ".</p>";
  };

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}