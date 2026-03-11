import "./style.css";

const dialog = document.getElementById("reviewsModal") as HTMLDialogElement;
const openBtn = document.getElementById("openReviews") as HTMLElement;
const closeBtn = document.getElementById("closeReviews") as HTMLButtonElement;

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event: MouseEvent) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
