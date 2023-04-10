document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const rating = parseInt(document.getElementById("rating").value);
    const text = document.getElementById("review-text").value;

    window.reviewData.push({ name, date, rating, text });

    displayReviews();

    event.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    displayReviews();
});

function displayReviews() {
    const container = document.getElementById("reviews");
    container.innerHTML = "";
    for (const review of window.reviewData) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${review.name}</h3>
            <time datetime="${review.date}">${new Date(review.date).toLocaleDateString()}</time>
            <p>Rating: ${generateStars(review.rating)}</p>
            <p>${review.text}</p>
        `;
        container.appendChild(card);
    }
}


function generateStars(rating) {
    const maxStars = 5;
    let stars = "";
    for (let i = 1; i <= maxStars; i++) {
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

