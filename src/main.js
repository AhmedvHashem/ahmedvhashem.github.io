import "./style.css";
const dialog = document.getElementById("reviewsModal");
const openBtn = document.getElementById("openReviews");
const closeBtn = document.getElementById("closeReviews");
openBtn.addEventListener("click", () => {
    dialog.showModal();
});
closeBtn.addEventListener("click", () => {
    dialog.close();
});
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
