(function(global) {

  function Jukebox() {
    this.songs = [];
  }

  Jukebox.prototype.addSong = function(song) {
    var someSong = new Audio(song);
    this.songs.push(someSong);
  }

  Jukebox.prototype.selectedSong = function(song) {
    
  }

  Jukebox.prototype.playSong = function(song) {
    return song.play();
  }

  Jukebox.prototype.pauseSong = function(song) {
    return song.pause();
  }

  global.Jukebox = Jukebox;

})(this);
