export function initMusicPlayer(filePath) {
  if (!window.globalMusicState) {
    window.globalMusicState = {
      audio: null,
      isPlaying: false,
    };
  }

  const state = window.globalMusicState;

  if (!state.audio) {
    const audio = new Audio(filePath);
    audio.loop = true;

    const lastTime = localStorage.getItem("laguTime");
    if (lastTime) {
      audio.currentTime = parseFloat(lastTime);
    }
    
    // nyimpen musik
    setInterval(() => {
      localStorage.setItem("laguTime", audio.currentTime);
    }, 1000);

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("laguTime", audio.currentTime);
    });

    state.audio = audio;
    console.log("🎵 Audio baru dibuat.");
  }

  if (!state.isPlaying) {
    state.audio
      .play()
      .then(() => {
        state.isPlaying = true;
        console.log("musik di puter!");
      })
      .catch((err) => {
        console.warn("Autoplay dicegah system: ", err.message);
      });
  }

  state.toggle = function() {
    if(!state.audio) return;
    if(state.isPlaying) {
      state.audio.pause();
      state.isPlaying = false;

      console.log("Di Jeda");
    } else {
      state.audio.play();
      state.isPlaying = true;

      console.log("Di puter lagi ya :>");
    }
  }

  // Global object | data:
  window.toggleMusic = state.toggle;
}
