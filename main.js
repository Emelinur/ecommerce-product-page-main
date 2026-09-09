const productThumbnailBtn=document.querySelectorAll(".product__thumb-btn");
const productMainImg=document.querySelector(".product__main-img");
const lightbox=document.querySelector(".lightbox");
const lightboxBtnNext=document.querySelector(".lightbox__btn--next");
const lightboxMainImg=document.querySelector(".lightbox__main-img");
const lightboxThumbBtn=document.querySelectorAll(".lightbox__thumb-btn")


productThumbnailBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{
  if(e.isTrusted){
productMainImg.src=`images/image-product-${index + 1}.jpg`
productThumbnailBtn.forEach((b) => b.classList.remove("product__thumb-btn--active"));
    btn.classList.add("product__thumb-btn--active");
  }
  })
})
productMainImg.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxBtnNext.addEventListener("click",()=>{
 lightboxThumbBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(a)=>{
console.log(a)
 if(a.isTrusted){
lightboxMainImg.src=`images/image-product-${index + 1}.jpg`
lightboxBtnNext.forEach((c) => c.classList.remove("product__thumb-btn--active"));
    btn.classList.add("product__thumb-btn--active");
  }
  })
 })
})
})

