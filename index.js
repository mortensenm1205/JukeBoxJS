var jukebox = new Jukebox();
var view = new View();

var selection = document.querySelector('#song-selection');
var songResults = document.querySelector('#selected-song');

var playBtn = document.querySelector('#play-btn');
var pauseBtn = document.querySelector('#pause-btn');


selection.addEventListener('change', function(event) {
  songResults.innerHTML = jukebox.selectedSong(event, view);
  playBtn.addEventListener('click', function() {
    jukebox.playSong(event);
  });
  pauseBtn.addEventListener('click', function() {
    jukebox.pauseSong(event);
  });
});
