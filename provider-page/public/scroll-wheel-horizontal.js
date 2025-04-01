if (typeof window !== 'undefined') {
  window.addEventListener('load', function () {
    const scrollContainer = document.querySelector('.doctor-scroll-x');

    if (scrollContainer) {
      scrollContainer.addEventListener(
        'wheel',
        function (e) {
          if (e.deltaY !== 0) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        },
        { passive: false }
      );
    }
  });
}
