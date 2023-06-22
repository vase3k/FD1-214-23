  // Scroll to anchors
  (function () {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector(".header").clientHeight; //сюда прописываеться класс куда скролиться
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.scrollY;
      let startTime = null;
      const ease = function (t, b, c, d) {
        //обработчик скрола
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      const animation = function (currentTime) {
        //функуция анимации
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };
    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll"); //класс начинаеться с префикса JS используеться для чегото в javascript
      links.forEach(each => {
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  })();