// Click toggle for person icon dropdown
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const menu = dropdown.querySelector(".dropdown_menu");

    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent closing when clicking inside
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });


  const openBtn = document.getElementById("open-register");
  const modal = document.getElementById("registerModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.querySelector(".register-form");
  const welcomeText = document.getElementById("welcomeText");

  // Open modal on click
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  // Close modal on close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // On form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name) {
      welcomeText.innerHTML = `Hi <span class="name-highlight">${name}</span> Welcome to McSmash — the ultimate home for badminton lovers. From beginners finding their rhythm to players chasing victory, we spark passion in every smash and bring energy to every game.`;

      welcomeText.style.pointerEvents = "auto";
      welcomeText.style.opacity = 0;
      setTimeout(() => {
        welcomeText.style.opacity = 1;
      }, 100);

      modal.style.display = "none";
      form.reset();
    }
  });



document.addEventListener("DOMContentLoaded", () => {
  const pageContent = document.getElementById("page-content");
  const clickableImages = document.querySelectorAll(".clickable-image");

  clickableImages.forEach(img => {
    const modalId = img.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector(".closeBtn");

    img.addEventListener("click", () => {
      // Open modal
      modal.style.display = "flex";
      // Add class to body to disable scroll
      document.body.classList.add("modal-open");
      // Blur background content if desired
      pageContent.classList.add("blur");
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      pageContent.classList.remove("blur");
    });

    // Close when clicking outside the modal content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        pageContent.classList.remove("blur");
      }
    });
  });
});


 const aboutText = document.getElementById('aboutText');
  const toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('click', () => {
    aboutText.classList.toggle('expanded');
    toggleBtn.textContent = aboutText.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });

 document.addEventListener("DOMContentLoaded", function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    incrementButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const countSpan = this.previousElementSibling;
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count + 1;
      });
    });

    decrementButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const countSpan = this.nextElementSibling;
        let count = parseInt(countSpan.textContent);
        if (count > 0) {
          countSpan.textContent = count - 1;
        }
      });
    });
  });


const videoLinks = document.querySelectorAll('.video-link');

  videoLinks.forEach(link => {
    link.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-url');
      const confirmPlay = confirm('Do you want to play this video?');

      if (confirmPlay) {
        window.open(videoUrl, '_blank');
      } 
      else {
        alert('Video playback cancelled.');
      }
    });
  });

