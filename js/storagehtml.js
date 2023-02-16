let productsWrapper = document.querySelector('.products-wrapper')
productsWrapper.addEventListener('click', (event)=>{
    let target = event.target;
    if(target.closest("li")){
        console.log("условие для сортировки");
        // условие для сортировки
    }else if(target.closest("div")){
        console.log("Условие для выбора карточки товара");
    }else return
})

let storageProduct = document.querySelector('.storageProduct')
// let watch = storageProduct.querySelector('.watch')
console.log(storageWatch);

addProducts(storageWatch, storageProduct, watch);
