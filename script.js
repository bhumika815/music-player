const tracks = ["music/song1.mp3", "music/song2.mp3", "music/song3.mp3"];// Update with actual file names
let currentTrack = 0;
const audioPlayer = document.getElementById("audioPlayer");

function loadTrack(index) {
    audioPlayer.src = tracks[index];
    audioPlayer.play();
}
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}
function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
}
function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
}
// Load the first track on page load
loadTrack(currentTrack);


