function openModal(image) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = image.src;
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}