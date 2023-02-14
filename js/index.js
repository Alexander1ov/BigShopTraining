// Товары и расположение

let receiptsProduct = document.querySelector('.receipts-product');
let receiptsProductWrapper = receiptsProduct.querySelector('.product__wrapper');

let showcaseProduct = document.querySelector('.showcase-product');
let showcaseProductWrapper = showcaseProduct.querySelector('.product__wrapper');

function addProducts(arr, location, wrapper) {
    let className = location.closest('div').className;

    wrapper.innerHTML = "";
    arr.forEach(function (elem) {
        wrapper.innerHTML += `<div class="${className}__${elem.type}"><img src=${elem.img}><p>${elem.name}<br><b>${elem.price}</b></p></div> `
    });
}
addProducts(storageBags, receiptsProduct, receiptsProductWrapper);
addProducts(storageWatch, showcaseProduct, showcaseProductWrapper);


// Слайдер товаров
function showProduct(location, wrapper) {
    let clickArea = location.closest('.scroll');
    let sumElements = wrapper.querySelectorAll('div').length;

    let widthElem = 355;
    let elem = 3;
    let initialValue = 0;
    // индикатор прокрутки
    let dot = [];
    function createDot() {
        let indicator = clickArea.querySelector('.indicator');
        for (let i = 0; i < Math.ceil(sumElements / 6); i++) {
            let span = document.createElement('span')
            span.classList.add('dot')
            indicator.append(span)
            dot.push(span)
        }
    }
    // прокрутка при нажатии
    function calcClick(event) {
        let target = event.target.closest('A')
        console.log(target.tagName);
        if (target.tagName !== 'A') return;
        if (target.classList.contains('arrow__next')) {
            initialValue = initialValue - widthElem * elem;
            initialValue = Math.max(initialValue, -widthElem * (sumElements / 2 - elem))
            wrapper.style.marginLeft = initialValue + "px"

            dot[(initialValue + 1065) / -1065].style.backgroundColor = '#b79bfa';
            dot[initialValue / -1065].style.backgroundColor = '#e8ad69';

        } else if (target.classList.contains('arrow__prew')) {
            initialValue = initialValue + widthElem * elem;
            initialValue = Math.min(initialValue, 0)
            wrapper.style.marginLeft = initialValue + "px"

            dot[(initialValue - 1065) / -1065].style.backgroundColor = '#b79bfa';;
            dot[initialValue / -1065].style.backgroundColor = '#e8ad69';
        }
    }
    if (location.classList.contains('receipts-product')) {
        createDot()
        dot[initialValue / -1065].style.backgroundColor = '#e8ad69';
    };

    clickArea.addEventListener('click', calcClick);
    clickArea.onselectstart = () => false;
  





}

showProduct(receiptsProduct, receiptsProductWrapper)
showProduct(showcaseProduct, showcaseProductWrapper)