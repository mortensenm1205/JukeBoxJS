# JukeBoxJS
Jukebox Project with Music Service API

# **_v1_**

## BASE JukeBox Player
At it's core it's a music player with a few songs uploaded. You're able to select a song from a drop down menu (pre-loaded with 5). Then you're able to Play and Pause, as well as stop the current playing song when you select a new one.  

### Jukebox.js
Using HTMLMedia and HTMLAudio for my audio functionality, Code written for playing, pausing and creating a new song instance. The selectedSong method allows for a new audio instance with addSong() and it brings in my View methods for adding the audio element to the page as well as display the inner text of the option elements for the currently selected song. It also has error logic for when a user doesn't choose a preloaded song.

### View.js
Little methods to help Jukebox function. First using songToDisplay() with event properties to help display the inner text of an option element. Then a small function that let the user know a song wasn't selected. Finally, getting the audio element to remove itself once it had more than one audio element in it's parent.

### index.js
Running all my instances together along with my html elements
