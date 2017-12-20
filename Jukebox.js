(function(global) {

  function Jukebox() {
    this.songs;
  }

  Jukebox.prototype.addSong = function(song) {
    var someSong = new Audio(song);
    this.songs = someSong;
  }

  Jukebox.prototype.selectedSong = function(event, view) {
      if(event.target.value === "Select a song") {
        alert('Please choose a song');
        return view.chooseASong();
      } else {
        this.addSong(event.target.value);
        return view.songToDisplay(event);
      }
  }

  Jukebox.prototype.playSong = function() {
     this.songs.play();
  }

  Jukebox.prototype.pauseSong = function() {
     this.songs.pause();
  }

  global.Jukebox = Jukebox;

})(this);
