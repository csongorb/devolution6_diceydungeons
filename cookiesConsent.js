//Cookies consent issue fixer
  document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("load", (event) => {
    const frame = event.target;

    if (!frame || frame.tagName !== "IFRAME") return;

    if (frame.dataset.selfReload === "true") {
      frame.dataset.selfReload = "false";
      return;
    }

    const allFrames = document.querySelectorAll("iframe");
    allFrames.forEach((other) => {
      if (other !== frame) {
        other.dataset.selfReload = "true";
        other.src = other.src;
      }
    });
  }, true);
});