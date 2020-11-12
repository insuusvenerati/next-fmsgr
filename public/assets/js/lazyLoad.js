let images = document.querySelectorAll('.lazy');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        let attr = entry.target.getAttribute('data-src');
      entry.target.src = attr;
      entry.target.classList.add("animate__animated");
        entry.target.classList.add("animate__fadeIn");
      }, 250);
      observer.unobserve(entry.target);
    } else {
      //entry.target.classList.remove('animate__animated animate__bounce');
      return;
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});