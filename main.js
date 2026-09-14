const productThumbnailBtn=document.querySelectorAll(".product__thumb-btn");
const productMainImg=document.querySelector(".product__main-img");

const lightbox=document.querySelector(".lightbox");
const lightboxBtnNext=document.querySelector(".lightbox__btn--next");
const lightboxMainImg=document.querySelector(".lightbox__main-img");
const lightboxThumbBtn=document.querySelectorAll(".lightbox__thumb-btn")
const lightboxThumbImg=document.querySelectorAll(".lightbox__thumb-img")
const lightboxBtnPrev=document.querySelector(".lightbox__btn--prev")

productThumbnailBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{
  if(e.isTrusted){
productMainImg.src=`images/image-product-${index + 1}.jpg`
productThumbnailBtn.forEach((b) => b.classList.remove("product__thumb-btn--active"));
    btn.classList.add("product__thumb-btn--active");
  }
  })
})


let currentLightboxIndex = 0;
const totalImages = lightboxThumbBtn.length; 


function updateLightbox(index) {
  currentLightboxIndex = index;
  lightboxMainImg.src = `images/image-product-${currentLightboxIndex + 1}.jpg`;
  lightboxThumbBtn.forEach((btn, i) => {
    btn.classList.toggle("lightbox__thumb-btn--active", i === currentLightboxIndex);
  });
}

lightboxBtnNext.addEventListener("click", () => {
  let nextIndex = currentLightboxIndex + 1;
  if (nextIndex >= totalImages) {
    nextIndex = 0;
  }
  updateLightbox(nextIndex);
});

 lightboxBtnPrev.addEventListener("click", () => {
   let prevIndex = currentLightboxIndex - 1;
   if (prevIndex < 0) {
     prevIndex = totalImages - 1;
   }
   updateLightbox(prevIndex);
});

lightboxThumbBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateLightbox(index);
  });
});


productMainImg.addEventListener("click",()=>{
lightbox.style.display="flex";
 lightboxThumbBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(a)=>{
 if(a.isTrusted){
lightboxMainImg.src=`images/image-product-${index + 1}.jpg`
lightboxThumbBtn.forEach((c) => c.classList.remove("lightbox__thumb-btn--active"));
    btn.classList.add("lightbox__thumb-btn--active");
  }
  })
 })

})
 

