(function(global) {

  function Jukebox() {
    this.songs = [0];
  }

  Jukebox.prototype.addSong = function(song) {
    var someSong = new Audio(song);
    this.songs.push(someSong);
  }

  Jukebox.prototype.selectedSong = function(event, view) {
        this.addSong(event.target.value);
        return view.songToDisplay(event);
  }

  Jukebox.prototype.playSong = function(event) {
     this.songs[event.target.selectedIndex].play();
  }

  Jukebox.prototype.pauseSong = function(event) {
     this.songs[event.target.selectedIndex].pause();
  }

  global.Jukebox = Jukebox;

})(this);
