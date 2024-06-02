document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');

    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        const newReview = {
            name,
            review,
            date: new Date().toLocaleString()
        };

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        displayReviews();
        reviewForm.reset();
    });

    function displayReviews() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviewList.innerHTML = '';
        reviews.forEach(function(review) {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p>"${review.review}"</p>
                <p><strong>— ${review.name}</strong> <em>${review.date}</em></p>
            `;
            reviewList.appendChild(reviewElement);
        });
    }

    displayReviews();
});
