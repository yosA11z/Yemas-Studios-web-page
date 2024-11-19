const salir = document.querySelector("#salir");
salir.addEventListener("click", () => {
    localStorage.removeItem("userName");
    window.location.href = "iniciarsesion.html";
});

const userName = localStorage.getItem("userName");

if (userName) {
    document.getElementById("bienvenido").textContent = `Bienvenido, ${userName}!`;
} else {
    document.getElementById("bienvenido").textContent = "Bienvenido!";
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("reviewText").value;

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");
    reviewItem.innerHTML = `
        <p><strong>Calificación:</strong> ${"⭐️".repeat(rating)}</p>
        <p>${reviewText}</p>
    `;

    document.getElementById("reviewsContainer").appendChild(reviewItem);

    document.getElementById("reviewForm").reset();
});
