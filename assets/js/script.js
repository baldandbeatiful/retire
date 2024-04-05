document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("backgroundSound");
  const toggleMuteButton = document.getElementById("toggleMuteButton");

  function toggleMute() {
    audio.muted = !audio.muted;
    toggleMuteButton.innerHTML = audio.muted ? '<i class="fas fa-volume-off"></i>' : '<i class="fas fa-volume-up"></i>'; 
  }

  audio.volume = 0.1;

  toggleMuteButton.addEventListener("click", toggleMute);

  audio.play().catch(error => {
    document.addEventListener("click", function() {
      audio.play();
    });
  });
});
