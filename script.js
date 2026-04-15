/* ─────────────────────────────────────────
   Stage 1B — Profile Card Script
   ───────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", function () {
  const timeEl = document.getElementById("user-time");

  function updateTime() {
    if (!timeEl) return;
    timeEl.textContent = Date.now();
  }

  // Set immediately on load
  updateTime();

  // Ticker every 500ms — feels like a live counter
  setInterval(updateTime, 500);
});
