let imageThumbnails = Array.from(document.getElementsByClassName('product-img'));
let productBigImages = [
	'url(\"assets/img/thumbnails_boots_img.png\") center no-repeat',
	'url(\"assets/img/thumbnails_trousers_img.png\") center no-repeat',
	'url(\"assets/img/big_product_img.png\") center'
];
let bigProductImg = document.getElementsByClassName('big-product-img')[0];

for (let img of imageThumbnails) {

	img.addEventListener('click', () => {

		let imgIndex = imageThumbnails.indexOf(img);

		for (let img of imageThumbnails) {
			img.classList.remove('img-active');
		}

		img.classList.toggle('img-active');
		bigProductImg.style.background = productBigImages[imgIndex];
	});
}

const quantity = document.getElementById('quantity-input'),
	plusBtn = document.getElementById('quantity-inc-button'),
	minusBtn = document.getElementById('quantity-dec-button');

plusBtn.onclick = () => {
	quantity.value = +quantity.value + 1;
};
minusBtn.onclick = () => {
	if (quantity.value > 1) {
		quantity.value = +quantity.value - 1;
	};
};

////////////////////// IE //////////////////////////////////////////////////////////////
// "use strict";

// var imageThumbnails = document.getElementsByClassName('product-img');
// var imageThumbnailsArray = Array.prototype.slice.call(imageThumbnails, 0);
// var productBigImages = ['url(\"assets/img/thumbnails_boots_img.png\") center no-repeat', 'url(\"assets/img/thumbnails_trousers_img.png\") center no-repeat', 'url(\"assets/img/big_product_img.png\") center'];
// var bigProductImg = document.getElementsByClassName('big-product-img')[0];

// var _loop = function _loop() {
// 	var img = imageThumbnailsArray[_i];
// 	img.addEventListener('click', function() {
// 		var imgIndex = imageThumbnailsArray.indexOf(img);

// 		for (var _i2 = 0; _i2 < imageThumbnailsArray.length; _i2++) {
// 			var _img = imageThumbnailsArray[_i2];

// 			_img.classList.remove('img-active');
// 		}

// 		img.classList.toggle('img-active');
// 		bigProductImg.style.background = productBigImages[imgIndex];
// 	});
// };

// for (var _i = 0; _i < imageThumbnailsArray.length; _i++) {
// 	_loop();
// }

// var quantity = document.getElementById('quantity-input'),
// 	plusBtn = document.getElementById('quantity-inc-button'),
// 	minusBtn = document.getElementById('quantity-dec-button');

// plusBtn.onclick = function() {
// 	quantity.value = +quantity.value + 1;
// };

// minusBtn.onclick = function() {
// 	if (quantity.value > 1) {
// 		quantity.value = +quantity.value - 1;
// 	}
// };