// // src/musicPlayer.js

// export function initMusicPlayer(audioId, audioSrc, startTime = 0, endTime = null) {
//   const audio = document.getElementById(audioId);

//   if (!audio) {
//     console.error(`Audio element dengan id "${audioId}" tidak ditemukan.`);
//     return;
//   }

//   // Set sumber lagu
//   audio.src = audioSrc;
//   audio.loop = true;

//   // Ambil posisi terakhir dari localStorage (kalau ada)
//   const lastTime = localStorage.getItem("laguTime");
//   if (lastTime) {
//     audio.currentTime = parseFloat(lastTime);
//   } else {
//     audio.currentTime = startTime;
//   }

//   // Mainkan audio (harus setelah interaksi user, misal klik tombol)
//   audio.play().catch(err => {
//     console.log("Menunggu interaksi user:", err.message);
//   });

//   // Simpan posisi lagu setiap 1 detik
//   const saveInterval = setInterval(() => {
//     localStorage.setItem("laguTime", audio.currentTime);
//   }, 1000);

//   // Kalau ada batas waktu (endTime), ulang dari awal
//   if (endTime) {
//     audio.addEventListener("timeupdate", () => {
//       if (audio.currentTime >= endTime) {
//         audio.currentTime = startTime;
//         audio.play();
//       }
//     });
//   }

//   // Simpan waktu terakhir saat tab ditutup
//   window.addEventListener("beforeunload", () => {
//     localStorage.setItem("laguTime", audio.currentTime);
//   });

//   // Simpan status “lagu sedang main” biar halaman lain tahu
//   localStorage.setItem("laguStatus", "playing");
// }

// src/musicPlayer.js

export function initMusicPlayer(audioId, audioSrc, startTime = 0, endTime = null) {
  let audio = document.getElementById(audioId);

  if (!audio) {
    console.error(`Audio element dengan id "${audioId}" tidak ditemukan.`);
    return;
  }

  audio.src = audioSrc;
  audio.loop = true;

  // Ambil waktu terakhir
  const lastTime = localStorage.getItem("laguTime");
  if (lastTime) {
    audio.currentTime = parseFloat(lastTime);
  } else {
    audio.currentTime = startTime;
  }

  audio.play().catch(err => {
    console.log("Menunggu interaksi user:", err.message);
  });

  // Simpan posisi tiap 1 detik
  const interval = setInterval(() => {
    localStorage.setItem("laguTime", audio.currentTime);
  }, 1000);

  // Reset posisi bila sudah mencapai endTime (kalau ada)
  if (endTime) {
    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime >= endTime) {
        audio.currentTime = startTime;
        audio.play();
      }
    });
  }

  // Simpan status dan referensi
  localStorage.setItem("laguStatus", "playing");
  window.currentAudio = audio; // simpan di window agar bisa diakses di file lain

  return audio;
}

export function pauseMusic() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    localStorage.setItem("laguStatus", "paused");
  }
}

export function resumeMusic() {
  if (window.currentAudio) {
    window.currentAudio.play();
    localStorage.setItem("laguStatus", "playing");
  }
}
