const productThumbnailBtn=document.querySelectorAll(".product__thumb-btn");
const productMainImg=document.querySelector(".product__main-img");
const lightbox=document.querySelector(".lightbox");
const lightboxBtnNext=document.querySelector(".lightbox__btn--next");
const lightboxMainImg=document.querySelector(".lightbox__main-img");
const lightboxThumbBtn=document.querySelectorAll(".lightbox__thumb-btn")
const lightboxThumbnails=document.querySelector(".lightbox__thumbnails")

productThumbnailBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{
  if(e.isTrusted){
productMainImg.src=`images/image-product-${index + 1}.jpg`
productThumbnailBtn.forEach((b) => b.classList.remove("product__thumb-btn--active"));
    btn.classList.add("product__thumb-btn--active");
  }
  })
})
 lightboxBtnNext.addEventListener("click",()=>{
  
for(let i=0; i<lightboxThumbBtn.length; i++){
console.log(i)
}
  })
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
 

