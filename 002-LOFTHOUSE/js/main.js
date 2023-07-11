/* burger handler */
(function () {
    const burgerItem = document.querySelector(".nav-icon-btn");
    const menu = document.querySelector(".header__top-row");
    const menuLinks = document.querySelectorAll('.header_link');
	const navIcon = document.querySelector('.nav-icon');
    burgerItem.addEventListener("click", () => {
      menu.classList.toggle("header__top-row--mobile");
	  navIcon.classList.toggle('nav-icon--active');
    });
    if (window.innerWidth <= 956) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove("header__top-row--mobile");
        });
      }
    }
  })();
  

/* Phone mask */
mask('[data-tel-input]')

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = '';
	})
});

/* yandex map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [59.943543, 30.338928],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16
	});

	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent:
				`
					<div class="balloon">
						<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
						<div class="balloon__contacts">
							<a href="tel:+78121234567">+8 (812) 123-45-67</a>
						</div>
					</div>
				`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40]
		});

	myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип

	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
}


// Scroll to anchors
(function () {
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector(".nav__list").clientHeight; //сюда прописываеться класс куда скролиться
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