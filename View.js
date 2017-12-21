(function(global) {

  function View() {}

  View.prototype.songToDisplay = function(event) {
    return event.target.children[event.target.selectedIndex].innerText + " has been selected!";
  }

  View.prototype.chooseASong = function() {
    return "Choose a song please!";
  }

  View.prototype.addSongToPage = function(el, song) {
      console.log(el, song);
  }

  global.View = View;

})(this);
