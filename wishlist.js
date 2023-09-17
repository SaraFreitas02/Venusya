$(document).ready(function() { //load script when page ready
 
  //Liking products
   //variables
    const productNotLiked = document.getElementsByClassName("emptyHeartWish"); //select the empty heart icons
    const productLiked = document.getElementsByClassName("heartAnimAddWish"); //select the full heart icons
    
   //error handling + hide full hearts
    if (!productNotLiked.length || !productLiked.length){ //warn if there is elements missing
        console.error("Missing Elements - Liking Products - ")

    } else { //hide the full hearts
         for(let i = 0; i < productLiked.length; i++){
             productLiked[i].style.display = "none";
         }
    }

   //like or unlike product
     for(let x = 0; x < productLiked.length; x++){
        const likedProduct = productLiked[x]; //get the current full heart
        const currentProduct = productNotLiked[x]; //get the current empty heart

        //make it full when liked
        currentProduct.addEventListener("click", function(){
            likedProduct.style.display = "block";
            likedProduct.classList.remove("scaleOutHeartAnim");
            likedProduct.classList.add("scaleInHeartAnim");
        })

        //make it empty when unliked
        likedProduct.addEventListener("click", function(){
            likedProduct.classList.remove("scaleInHeartAnim");
            likedProduct.classList.add("scaleOutHeartAnim");
        })
            
     }

}) 