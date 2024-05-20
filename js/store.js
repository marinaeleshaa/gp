const starRating = document.querySelector('.star-rating');
const stars = starRating.querySelectorAll('.fa-star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(otherStar => otherStar.style.color = '#c3c6d1'); // Reset all stars
    star.style.color = 'orange'; // Set clicked star to orange
  });
});

console.log(typeof(stars));