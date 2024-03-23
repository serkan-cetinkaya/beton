//Infinite scrolling horizontal text
var tickerWrapper = document.querySelector(".ticker");
var list = tickerWrapper.querySelector(".ticker__content");
var clonedList = list.cloneNode(true);
var listWidth = 10;

list.querySelectorAll(".ticker__item").forEach(function (item) {
	listWidth +=
		item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
});

var endPos = tickerWrapper.offsetWidth - listWidth;

list.insertAdjacentHTML("beforeend", clonedList.innerHTML);

tickerWrapper.style.overflow = "hidden";
list.style.display = "inline-block";

var pos = 0;
var speed = 0.5;

function move() {
	pos -= speed;
	if (pos < -listWidth) {
		pos = 0;
	}
	list.style.transform = "translateX(" + pos + "px)";
	requestAnimationFrame(move);
}

move();

tickerWrapper.addEventListener("mouseenter", function () {
	speed = 0;
});

tickerWrapper.addEventListener("mouseleave", function () {
	speed = 0.5;
});

//toogle nav
document.addEventListener("DOMContentLoaded", function () {
	var toggleButton = document.getElementById("toggleButton");
	var navMenu = document.getElementById("navMenu");
	var overlay = document.getElementById("overlay");
	var closeButton = document.getElementById("closeButton");

	toggleButton.addEventListener("click", function () {
		navMenu.classList.toggle("show");
		overlay.classList.toggle("show");
	});

	closeButton.addEventListener("click", function () {
		closeMenu();
	});

	overlay.addEventListener("click", function () {
		closeMenu();
	});

	document.addEventListener("click", function (event) {
		if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
			closeMenu();
		}
	});

	function closeMenu() {
		navMenu.classList.remove("show");
		overlay.classList.remove("show");
	}
});
