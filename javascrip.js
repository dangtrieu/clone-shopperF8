const endpoint = 'https://api-ecom.duthanhduoc.com/products';
const ul = document.getElementsByClassName('grid__row--headle')

fetch(endpoint)
    .then(res => res.json())
    .then(data => handleDates(data));
function handleDates(data) {
    const shoppDate = data.data.products
    const htmls = shoppDate.map((items) => {
        return `
                                <div class="grid__column-2-4">
                                        <a href="#" class="container__product-item">
                                            <div class="container__product-item-img"
                                                style="background-image: url(${items.images[0]});">
                                            </div>
                                            <h4 class="container__product-item-heading">${items.name}</h4>
                                            <div class="container__product-item-price">
                                                <span
                                                    class="container__product-item-price-cost">${items.price_before_discoun}</span>
                                                <span
                                                    class="container__product-item-price-current">${items.price}</span>
                                            </div>
                                            <div class="container__product-item-score">
                                                <span
                                                    class="container__product-item-score-heart-point container__product-item-score-heart-point--active">
                                                    <i
                                                        class="container__product-item-score-heart-point-solid far fa-heart"></i>
                                                    <i
                                                        class="container__product-item-score-heart-point-regular fas fa-heart"></i>
                                                </span>
                                                <span class="container__product-item-score-star-rating">
                                                    <i
                                                        class="container__product-item-score-star-rating--active fa fa-star"></i>
                                                    <i
                                                        class="container__product-item-score-star-rating--active fa fa-star"></i>
                                                    <i
                                                        class="container__product-item-score-star-rating--active fa fa-star"></i>
                                                    <i
                                                        class="container__product-item-score-star-rating--active fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </span>
                                                <span class="container__product-item-score-sold">999 đã bán</span>
                                            </div>
                                            <div class="container__product-item-source">
                                                <span class="container__product-item-source-brand">SUN</span>
                                                <span class="container__product-item-source-country">Hàn Quốc</span>
                                            </div>
                                            <span class="container__product-item-label-favourite">
                                                <i class="fa fa-check"></i>
                                                <span>Yêu thích</span>
                                            </span>
                                            <div class="container__product-item-sale">
                                                <span class="container__product-item-sale-percent">35%</span>
                                                <span class="container__product-item-sale-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
              `
    });
    ul[0].innerHTML += htmls.join('/n')

}


