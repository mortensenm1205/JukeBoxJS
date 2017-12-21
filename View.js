(function(global) {

  function View() {}

  View.prototype.songToDisplay = function(event) {
    return event.target.children[event.target.selectedIndex].innerText + " has been selected!";
  }

  View.prototype.chooseASong = function() {
    return "Choose a song please!";
  }

  View.prototype.addSongToPage = function(el, song) {
    if(el.childElementCount >= 1) {
      el.firstChild.remove();
      return el.append(song);
    } else {
      return el.append(song);
    }
  }

  global.View = View;

})(this);
