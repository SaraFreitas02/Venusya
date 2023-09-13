$(document).ready(function() { //initiate code only when page is fully loaded

 //Show product description on image hover
   //variables
    const productDesc = $(".productDescriptionHomepage");
    const productImg = $(".productImg");

   //hide descriptions
    productDesc.hide();

   //show descriptions on image hover
    function showProductDesc() {
      productImg.hover(
        function() {

          //img is hovered over
          const index = productImg.index(this); //check which img was hovered
          $(productDesc[index]).show(); //show the corresponding description
        },
        function() {

          //hide description when hovering finished
          const index = productImg.index(this); //check the img that was hovered
          $(productDesc[index]).hide(); //hide the corresponding description
        }
      );
    }

   // Call the function
    showProductDesc();

})

//Please visit the Attributions Folder for copyright and crediting information of third parties resources
//Please visit the License File for information regarding the license of thir project
//Please visit the Disclaimer File for important disclaimers regarding this project