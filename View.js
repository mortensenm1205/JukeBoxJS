(function(global) {

  function View() {}

  View.prototype.songToDisplay = function(event) {
    return event.target.children[event.target.selectedIndex].innerText + " has been selected!";
  }

  global.View = View;

})(this);
