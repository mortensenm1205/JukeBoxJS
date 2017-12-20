(function(global) {

  function Jukebox() {
    this.songs = [];
  }

  Jukebox.prototype.addSong = function(song) {
    var someSong = new Audio(song);
    this.songs.push(someSong);
  }

  Jukebox.prototype.selectedSong = function(event, view) {
        this.addSong(event.target.value);
        return view.songToDisplay(event);
  }


  Jukebox.prototype.playSong = function(song) {
    return song.play();
  }

  Jukebox.prototype.pauseSong = function(song) {
    return song.pause();
  }

  global.Jukebox = Jukebox;

})(this);
