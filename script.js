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

