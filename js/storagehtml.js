let home = document.querySelector('.products-head')
home.addEventListener('click', () => {
    location.href = 'index.html'
})

let productsWrapper = document.querySelector('.products-wrapper')
let productSorted = productsWrapper.querySelectorAll('li');
let layoutWrapper = document.querySelector('.layout-wrapper')

function addProducts(arr, wrapper) {
    wrapper.innerHTML = "";
    arr.forEach(function (elem) {
        wrapper.innerHTML += `<div class="${wrapper.className}__${elem.type}"><img src=${elem.img}><p>${elem.name}<br><b>${elem.price}</b></p></div> `
    });
}
addProducts(allItems, layoutWrapper);
productSorted[0].classList.add('active-li')

productsWrapper.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest("li")) {
        productSorted.forEach((elem) => { elem.classList.remove('active-li') })
        layoutWrapper.innerHTML = ""
        let click = target.closest("li");
        click.classList.add('active-li')
        if (click.dataset.type == "allItems") {
            addProducts(allItems, layoutWrapper);
        } else if (click.dataset.type == "storageFashion") {
            addProducts(storageFashion, layoutWrapper);
        } else if (click.dataset.type == "storageFurnitures") {
            addProducts(storageFurnitures, layoutWrapper);
        } else if (click.dataset.type == "storageWatch") {
            addProducts(storageWatch, layoutWrapper);
        } else if (click.dataset.type == "storageBags") {
            addProducts(storageBags, layoutWrapper);
        } else if (click.dataset.type == "storageCloths") {
            addProducts(storageCloths, layoutWrapper);
        } else if (click.dataset.type == "storageToys") {
            addProducts(storageToys, layoutWrapper);
        } else return

    } else if (target.closest("div")) {
        console.log("Условие для выбора карточки товара");
    } else return
})