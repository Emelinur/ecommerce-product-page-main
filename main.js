const productThumbnailBtn = document.querySelectorAll(".product__thumb-btn");
const productMainImg = document.querySelector(".product__main-img");
const lightbox = document.querySelector(".lightbox");
const lightboxMainImg = document.querySelector(".lightbox__main-img");
const lightboxThumbBtn = document.querySelectorAll(".lightbox__thumb-btn");
const lightboxCloseBtn = document.querySelector(".lightbox__close-btn");
const productQuantityBtn = document.querySelectorAll(".product__quantity-btn");
const productQuantityValue = document.querySelector(".product__quantity-value");
const productAddBtn = document.querySelector(".product__add-btn");
const headerCartBtn = document.querySelector(".header__cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");
const menu = document.querySelector(".menu");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
const menuOverlay = document.querySelector(".menu-overlay");
const headerCartCount = document.querySelector(".header__cart-count");
const cartDropdownEmpty = document.querySelector(".cart-dropdown__empty");
const cartItem = document.querySelector(".cart-item");
const cartDropdownCheckoutBtn = document.querySelector(
  ".cart-dropdown__checkout-btn",
);
const productTitle = document.querySelector(".product__title");
const cartItemTitle = document.querySelector(".cart-item__title");
const cartItemDeleteBtn = document.querySelector(".cart-item__delete-btn");
const productPrice = document.querySelector(".product__price");
const cartItemProductPrice = document.querySelector(
  ".cart-item__product-price",
);
const galleryNavBtns = document.querySelectorAll(".gallery-nav-btn");
let currentImageIndex = 0;
const totalImages = lightboxThumbBtn.length;
function updateGalleries(index) {
  currentImageIndex = index;
  const newSrc = `images/image-product-${currentImageIndex + 1}.jpg`;
  productMainImg.src = newSrc;
  lightboxMainImg.src = newSrc;
  productThumbnailBtn.forEach((btn, i) => {
    btn.classList.toggle("product__thumb-btn--active", i === currentImageIndex);
  });
  lightboxThumbBtn.forEach((btn, i) => {
    btn.classList.toggle(
      "lightbox__thumb-btn--active",
      i === currentImageIndex,
    );
  });
}
function setupGallery(buttons) {
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      updateGalleries(index);
    });
  });
}
setupGallery(productThumbnailBtn);
setupGallery(lightboxThumbBtn);
galleryNavBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const direction = e.currentTarget.dataset.dir;

    if (direction === "next") {
      const nextIndex = (currentImageIndex + 1) % totalImages;
      updateGalleries(nextIndex);
    } else if (direction === "prev") {
      const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      updateGalleries(prevIndex);
    }
  });
});
productMainImg.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    updateGalleries(currentImageIndex);
    lightbox.style.display = "flex";
  }
});
lightboxCloseBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
let counterQuantityBtn = 0;
productQuantityBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const action = e.currentTarget.dataset.action;

    if (action === "increase") {
      counterQuantityBtn++;
    } else if (action === "decrease" && counterQuantityBtn > 0) {
      counterQuantityBtn--;
    }
    productQuantityValue.textContent = counterQuantityBtn;
  });
});
let cartQuantity = 0;

function renderCard() {
  if (cartQuantity === 0) {
    cartDropdownEmpty.style.display = "flex";
    cartItem.style.display = "none";
    cartDropdownCheckoutBtn.style.display = "none";
    headerCartCount.style.display = "none";
    headerCartCount.textContent = "0";
  } else {
    cartDropdownEmpty.style.display = "none";
    cartItem.style.display = "flex";
    cartDropdownCheckoutBtn.style.display = "block";
    const rawPrice = productPrice.textContent;
    const unitPrice = parseFloat(
      rawPrice.replace(/[^0-9.,]/g, "").replace(",", "."),
    );
    const total = unitPrice * cartQuantity;
    cartItemTitle.textContent = productTitle.textContent;
    cartItemProductPrice.innerHTML = `$${unitPrice.toFixed(2)} x ${cartQuantity} <strong>$${total.toFixed(2)}</strong>`;
    headerCartCount.textContent = cartQuantity;
    headerCartCount.style.display = "block";
  }
}

headerCartBtn.addEventListener("click", () => {
  cartDropdown.classList.toggle("cart-dropdown--active");
});

productAddBtn.addEventListener("click", () => {
  if (counterQuantityBtn > 0) {
    cartQuantity = counterQuantityBtn;
    renderCard();
  }
});

cartItemDeleteBtn.addEventListener("click", () => {
  cartQuantity = 0;
  counterQuantityBtn = 0;
  productQuantityValue.textContent = 0;
  renderCard();
});


menu.addEventListener("click", () => {
  menuOverlay.style.display = "flex";
  nav.classList.add("nav-active");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("nav-active");
  menuOverlay.style.display = "none";
});

renderCard();