function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60);
    var seconds = Math.floor(length % 60);
    var time = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    return time;
}

function calculateCurrentValue(currentTime) {
    var current_minute = Math.floor(currentTime / 60);
    var current_seconds = Math.floor(currentTime % 60);
    var current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
    return current_time;
}

function initProgressBar() {
    var player = document.getElementById('player');
    var length = player.duration;
    var current_time = player.currentTime;

    // Calculate total length of value
    var totalLength = calculateTotalValue(length);
    document.querySelector(".end-time").textContent = totalLength;

    // Calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    document.querySelector(".start-time").textContent = currentTime;

    var progressbar = document.getElementById('seekObj');
    progressbar.value = (player.currentTime / player.duration);

    progressbar.addEventListener("click", function(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        progressbar.value = percent;
    });

    player.addEventListener("timeupdate", function() {
        var currentTime = player.currentTime;
        var duration = player.duration;

        // Update current time display
        document.querySelector(".start-time").textContent = calculateCurrentValue(currentTime);

        // Update progress bar value
        progressbar.value = (currentTime / duration);
    });
}

function initPlayers() {
    var playerContainer = document.getElementById('player-container');
    var player = document.getElementById('player');
    var playBtn = document.getElementById('play-btn');

    document.addEventListener('DOMContentLoaded', function() {
        var player = document.getElementById('player');
        var playBtn = document.getElementById('play-btn');
    
        if (player && playBtn) {
            playBtn.addEventListener('click', function() {
                if (player.paused) {
                    player.play();
                    playBtn.classList.add('pause');
                } else {
                    player.pause();
                    playBtn.classList.remove('pause');
                }
            });
        } else {
            console.error('Player or play button not found.');
        }
    });
    
}

// Initialize player
initPlayers();

// Wait for the audio element to be ready before initializing the progress bar
document.getElementById('player').addEventListener('loadedmetadata', function() {
    initProgressBar();
});