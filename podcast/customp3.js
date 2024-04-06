document.addEventListener('DOMContentLoaded', function () {
    const audio = document.querySelector('audio');
    const playPauseBtn = document.querySelector('.play-pause');
    const seekBar = document.querySelector('.seek-bar');
    const volumeBar = document.querySelector('.volume-bar');
    const muteBtn = document.querySelector('.mute');
    const currentTime = document.querySelector('.current-time');
    const totalTime = document.querySelector('.total-time');
  
    playPauseBtn.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', toggleMute);
    seekBar.addEventListener('input', updateSeekBar);
    volumeBar.addEventListener('input', updateVolume);
  
    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateTotalTime);
  
    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
        playPauseBtn.style.backgroundImage = 'url("pause.svg")';
      } else {
        audio.pause();
        playPauseBtn.style.backgroundImage = 'url("play.svg")';
      }
    }
  
    function toggleMute() {
      if (audio.volume === 0) {
        audio.volume = 1;
        muteBtn.style.backgroundImage = 'url("volume.svg")';
      } else {
        audio.volume = 0;
        muteBtn.style.backgroundImage = 'url("mute.svg")';
      }
    }
  
    function updateSeekBar() {
      const seekTo = audio.duration * (seekBar.value / 100);
      audio.currentTime = seekTo;
    }
  
    function updateVolume() {
      audio.volume = volumeBar.value;
    }
  
    function updateCurrentTime() {
      const currentTimeMinutes = Math.floor(audio.currentTime / 60);
      const currentTimeSeconds = Math.floor(audio.currentTime % 60);
      currentTime.textContent = `${currentTimeMinutes}:${currentTimeSeconds < 10 ? '0' : ''}${currentTimeSeconds}`;
      seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
  
    function updateTotalTime() {
      const totalTimeMinutes = Math.floor(audio.duration / 60);
      const totalTimeSeconds = Math.floor(audio.duration % 60);
      totalTime.textContent = `${totalTimeMinutes}:${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`;
    }
  });
  