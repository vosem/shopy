const imageThumbnails = Array.from(document.getElementsByClassName('product-img'));
const productBigImages = [
						 'url(\"assets/img/thumbnails_boots_img.png\") center no-repeat',
						 'url(\"assets/img/thumbnails_trousers_img.png\") center no-repeat',
						 'url(\"assets/img/big_product_img.png\") center'
						 ];
const bigProductImg = document.getElementsByClassName('big-product-img')[0];

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