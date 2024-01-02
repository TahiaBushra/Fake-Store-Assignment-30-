const productsSection = document.querySelector(".products_section")

export function renderLoading(loadingState) {
    const template = `<div class = " loading_spiner flex justify-center min-h-screen items-center"> <span class = "animate-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg></span></div>`; if (loadingState) {
        productsSection.insertAdjacentHTML("beforeend", template)
    } else { document.querySelector(".loading_spiner").style.display = "none" }
}


export function renderData(products) {
    products.forEach(product => {
        const template = `<div  class = "flex flex-col gap-5 min-h-screen items-center m-5 border rounded-xl h-fit justify-center w-fit "><img src="${product?.image}" alt="${product?.title}" class = "w-80 aspect-square object-cover">
        <h2 class = "text-2xl font-semibold">${product.title}</h2><p>$${product.price}</p></div>`
        productsSection.insertAdjacentHTML("beforeend", template);
    })
}


export function renderError(message) {
    const template = `<div class = "flex justify-center min-h-screen items-center"><p class ="text-rose-500">${message}</p></div>`;
    productsSection.insertAdjacentHTML("beforeend", template)
}