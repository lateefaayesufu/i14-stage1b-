/* ─────────────────────────────────────────
   Stage 1B — Profile Card Script
   ───────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", function () {
  /* ── Epoch time ticker ── */
  const timeEl = document.getElementById("user-time");

  function updateTime() {
    if (timeEl) timeEl.textContent = Date.now();
  }

  updateTime();
  setInterval(updateTime, 500);

  /* ── Card flip ── */
  const flipWrapper = document.getElementById("flip-wrapper");
  const flipCard = document.querySelector(".flip-card");
  let isFlipped = false;

  function flip() {
    isFlipped = !isFlipped;
    flipCard.classList.toggle("flipped", isFlipped);
    flipWrapper.setAttribute("aria-pressed", isFlipped ? "true" : "false");
    flipWrapper.setAttribute(
      "aria-label",
      isFlipped
        ? "Flip card back to photo"
        : "Flip card to see profile details",
    );
  }

  // Click to flip
  flipWrapper.addEventListener("click", flip);

  // Keyboard: Enter or Space to flip
  flipWrapper.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });

  // Prevent social link clicks from flipping the card
  document.querySelectorAll(".social-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});
