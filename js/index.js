// Товары и расположение
let receiptsProduct = document.querySelector('.receipts-product');
let showcaseProduct = document.querySelector('.showcase-product');

let receiptsProductBag = receiptsProduct.querySelector('.bag');

let showcaseProductBag = showcaseProduct.querySelector('.bag');
let showcaseProductCloth = showcaseProduct.querySelector('.cloth');
let showcaseProductFashion = showcaseProduct.querySelector('.fashion');
let showcaseProductFurnitures = showcaseProduct.querySelector('.furnitures');
let showcaseProductToy = showcaseProduct.querySelector('.toy');
let showcaseProductWatch = showcaseProduct.querySelector('.watch');

function addProducts(arr, location, wrapper) {
    let className = location.closest('div').className;
    wrapper.innerHTML = "";
    arr.forEach(function (elem) {
        wrapper.innerHTML += `<div class="${className}__${elem.type}"><img src=${elem.img}><p>${elem.name}<br><b>${elem.price}</b></p></div> `
    });
}
addProducts(storageBags, receiptsProduct, receiptsProductBag);
addProducts(storageWatch, showcaseProduct, showcaseProductWatch);
addProducts(storageBags, showcaseProduct, showcaseProductBag);
addProducts(storageCloths, showcaseProduct, showcaseProductCloth);
addProducts(storageFashion, showcaseProduct, showcaseProductFashion);
addProducts(storageFurnitures, showcaseProduct, showcaseProductFurnitures);
addProducts(storageToys, showcaseProduct, showcaseProductToy);


// Выбор товара по категории
let assortment = document.querySelector('.showcase-sorted');
assortment.addEventListener('click', (event) => {
    let target = event.target.closest('li');
    if (!target) return
    let list = assortment.querySelectorAll('li')
    list.forEach((el)=>{
        el.classList.remove('activate')
    })
    target.classList.add('activate')
    let showcaseProductList = showcaseProduct.querySelectorAll('.product-wrapper');
    showcaseProductList.forEach((el)=>{
        el.classList.add('invisible')

        if(el.classList.contains(target.dataset.type)){
            el.classList.remove('invisible')
            showProduct(showcaseProduct, el)
        };
    })


});

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
        indicator.innerHTML = ""
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
        if (!target) return;
        if (target.classList.contains('arrow__next')) {
            initialValue = initialValue - widthElem * elem;
            initialValue = Math.max(initialValue, -widthElem * (Math.ceil(sumElements / 2) - elem))
            wrapper.style.marginLeft = initialValue + "px"

            dot[Math.ceil((initialValue + 1065) / -1065)].style.backgroundColor = '#b79bfa';
            dot[Math.ceil(initialValue / -1065)].style.backgroundColor = '#e8ad69';

        } else if (target.classList.contains('arrow__prew')) {
            initialValue = initialValue + widthElem * elem;
            initialValue = Math.min(initialValue, 0)
            wrapper.style.marginLeft = initialValue + "px"

            dot[Math.ceil((initialValue - 1065) / -1065)].style.backgroundColor = '#b79bfa';;
            dot[Math.ceil(initialValue / -1065)].style.backgroundColor = '#e8ad69';
        }
    }
    // if (location.classList.contains('receipts-product')) {
    createDot()
    dot[initialValue / -1065].style.backgroundColor = '#e8ad69';
    // };

    clickArea.addEventListener('click', calcClick);
    clickArea.onselectstart = () => false;


}

showProduct(receiptsProduct, receiptsProductBag)
showProduct(showcaseProduct, showcaseProductWatch)
