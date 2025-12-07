window.addEventListener('load', function() {
    
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-prev">&#10094;</button>
        <button class="lightbox-next">&#10095;</button>
        <div class="lightbox-content">
            <img src="" alt="Gallery Image">
        </div>
        <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(lightbox);

    const gallery = document.querySelectorAll('#sec6 .imgs');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    let currentIndex = 0;
    const images = [
        './images/gallery1.jpeg',
        './images/gallery2.jpeg',
        './images/gallery3.jpeg',
        './images/gallery4.jpeg',
        './images/gallery5.jpeg',
        './images/gallery6.jpeg'
    ];

    // Click on image
    gallery.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.onclick = function() {
            currentIndex = index;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            lightboxImg.src = images[currentIndex];
            counter.textContent = (currentIndex + 1) + ' / ' + images.length;
        };
    });

    // Close
    closeBtn.onclick = function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Next
    nextBtn.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
        counter.textContent = (currentIndex + 1) + ' / ' + images.length;
    };

    // Previous
    prevBtn.onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
        counter.textContent = (currentIndex + 1) + ' / ' + images.length;
    };

    // Click outside
    lightbox.onclick = function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Keyboard
    document.onkeydown = function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
        }
    };
});