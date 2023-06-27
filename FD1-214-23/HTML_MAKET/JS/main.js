/* затемнение шапки */
(function () {
  const header = document.querySelector(".header"); /* найти класс шапки */
  window.onscroll = () => {       /* функция при скроле */
    if (window.scrollY > 50) {         /* усли скролл больше 50 пикселей */
      header.classList.add("header_active");   /* поменять класс */
    } else {
      header.classList.remove("header_active"); /* если не истинно то убрать класс */
    }
  };
})();