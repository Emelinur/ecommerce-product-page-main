const productThumbnailBtn = document.querySelectorAll(".product__thumb-btn");
const productMainImg = document.querySelector(".product__main-img");
const lightbox = document.querySelector(".lightbox");
const lightboxMainImg = document.querySelector(".lightbox__main-img");
const lightboxThumbBtn = document.querySelectorAll(".lightbox__thumb-btn");
const lightboxBtnNext = document.querySelector(".lightbox__btn--next");
const lightboxBtnPrev = document.querySelector(".lightbox__btn--prev");
const lightboxCloseBtn = document.querySelector(".lightbox__close-btn");
const decreaseQuantityBtn = document.querySelector(".decrease__quantity-btn");
const IncreaseQuantityBtn = document.querySelector(".increase__quantity-btn");
const productQuantityBtn = document.querySelectorAll(".product__quantity-btn");
const productQuantityValue = document.querySelector(".product__quantity-value");
const productAddBtn=document.querySelector(".product__add-btn");
const headerCartBtn=document.querySelector(".header__cart-btn")
const cartDropdown=document.querySelector(".cart-dropdown")
const cartItemPriceCalculation=document.querySelector(".cart-item__price-calculation")
function setupGallery(buttons, mainImg, activeClass, onSelectCallback) {
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      mainImg.src = `images/image-product-${index + 1}.jpg`;
      buttons.forEach((b) => b.classList.remove(activeClass));
      btn.classList.add(activeClass);
      if (onSelectCallback) {
        onSelectCallback(index);
      }
    });
  });
}

let currentImageIndex = 0;

const totalImages = lightboxThumbBtn.length;
function updateLightbox(index) {
  currentImageIndex = index;
  lightboxMainImg.src = `images/image-product-${currentImageIndex + 1}.jpg`;
  lightboxThumbBtn.forEach((btn, i) => {
    btn.classList.toggle(
      "lightbox__thumb-btn--active",
      i === currentImageIndex,
    );
  });
}
setupGallery(
  productThumbnailBtn,
  productMainImg,
  "product__thumb-btn--active",
  (selectedIndex) => {
    currentImageIndex = selectedIndex;
  },
);

setupGallery(
  lightboxThumbBtn,
  lightboxMainImg,
  "lightbox__thumb-btn--active",
  (selectedIndex) => {
    currentImageIndex = selectedIndex;
  },
);

lightboxBtnNext.addEventListener("click", () => {
  let nextIndex = currentImageIndex + 1;
  if (nextIndex >= totalImages) {
    nextIndex = 0; // Başa dön
  }
  updateLightbox(nextIndex);
});

lightboxBtnPrev.addEventListener("click", () => {
  let prevIndex = currentImageIndex - 1;
  if (prevIndex < 0) {
    prevIndex = totalImages - 1;
  }
  updateLightbox(prevIndex);
});

productMainImg.addEventListener("click", () => {
  updateLightbox(currentImageIndex);
  lightbox.style.display = "flex";
});

lightboxCloseBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

let counterQuantityBtn = 0;
productQuantityBtn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    let action = e.currentTarget.dataset.action;
    if (action === "increase") {
      counterQuantityBtn++;
    } else if (action === "decrease" && counterQuantityBtn > 0) {
      counterQuantityBtn--;
    }
    productQuantityValue.textContent = counterQuantityBtn;
  });
});
headerCartBtn.addEventListener("click",()=>{
cartDropdown.classList.toggle("cart-dropdown--active")
})


productAddBtn.addEventListener("click",()=>{

  cartItemPriceCalculation
})