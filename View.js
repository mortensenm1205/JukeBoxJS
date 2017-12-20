(function(global) {

  function View() {}

  View.prototype.songToDisplay = function(event) {
    return event.target.children[event.target.selectedIndex].innerText + " has been selected!";
  }

  View.prototype.chooseASong = function() {
    return "Choose a song please!";
  }

  global.View = View;

})(this);
