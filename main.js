const productThumbnailBtn=document.querySelectorAll(".product__thumb-btn");
const productMainImg=document.querySelector(".product__main-img")
productThumbnailBtn.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{
  if(e.isTrusted){
    console.log(productMainImg.src)
productMainImg.src=`images/image-product-${index + 1}.jpg`
productThumbnailBtn.forEach((b) => b.classList.remove("product__thumb-btn--active"));
    btn.classList.add("product__thumb-btn--active");
  }
  })
})