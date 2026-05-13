let currentImageIndex = 0;

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = currentImageIndex + direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentImageIndex];
}