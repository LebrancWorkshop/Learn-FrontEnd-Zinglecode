// Mouse Event
// - mouseover
// - mouseout

const images = document.querySelectorAll('.image');
const displayImage = document.querySelector('.display-image');

function hoverImage(event) {
  displayImage.src = event.target.src;
}

function unhoverImage() {
  displayImage.src = '';
}

images.forEach((image) => {
  image.addEventListener('mouseover', hoverImage);
  image.addEventListener('mouseout', unhoverImage);
});
