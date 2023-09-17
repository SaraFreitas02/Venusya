$(document).ready(function() { //initiate code only when page is fully loaded
  
 //Device adaptation
  //variables
   const header = document.getElementById("header"); //select header
   const headerBtns = document.getElementById("headerBtnsDT"); //select all buttons from header
   const shoppingBtns = document.getElementById("headerBtns"); //select the buttons except menu div
   const shoppingBtnsChildren = $(shoppingBtns.children); //select the buttons of the div
   const dpdMenu = $("#dropdownMenu"); //select menu button

  //error handling
   if (!header || !headerBtns || !dpdMenu || !shoppingBtns){
    console.error("Missing elements in - device adaptation -");
   }

  //hide dropdown menu
   dpdMenu.hide()
  
  //change display when on desktop
   function changeHeaderDisplay (){
    if (window.innerWidth > 1200) {

      //show dropdown menu
      dpdMenu.show()

      //remove existing displays
      header.classList.remove("column"); //from header
      headerBtns.classList.remove("column"); //from all the buttons in the header
      shoppingBtns.classList.remove("justCont-center"); //from the buttons except menu
      

      //create new display
       //from header
        header.classList.add("row");
        header.classList.add("justCont-spaceBtwn");
        header.classList.add("marginBtm-30px");

        //from all the buttons in the header 
        headerBtns.classList.add("row");
        headerBtns.classList.add("justCont-flexEnd");
        
        //from the buttons except menu
        shoppingBtns.classList.add("justCont-spaceAround");
        shoppingBtnsChildren.each(function(){
          $(this).addClass("padding5px");
        })

        //from the menu button
        dpdMenu.addClass("marginLeft-30px");
       

    } else {

      //show dropdown menu
      dpdMenu.hide()

      //create initial displays
      header.classList.add("column"); //from header
      headerBtns.classList.add("column"); //from all the buttons in the header
      shoppingBtns.classList.add("justCont-center"); //from the buttons except menu
      

      //remove new display
       //from header
       header.classList.remove("row");
       header.classList.remove("justCont-spaceBtwn");
       header.classList.remove("marginBtm-30px");

       //from all the buttons in the header
       headerBtns.classList.remove("row");
       headerBtns.classList.remove("justCont-flexEnd");

       //from the buttons except menu
       shoppingBtns.classList.remove("justCont-spaceAround");
       shoppingBtnsChildren.each(function(){
         $(this).removeClass("padding5px");
       })

       //from menu
       dpdMenu.removeClass("marginLeft-30px");
    }
   }

  //call the function
   changeHeaderDisplay(); //on page load
   window.addEventListener("resize", changeHeaderDisplay); //everytime window is resized


 //Handle menu options
  //variables 
   const menuBtn = $("#dpdMenu"); //select the menu button
   const shopBtn = $("#shopBtn"); //select the shopping button
   const menuCont = $("#menuBtnCont") //slect the menu content
   const shopCont = $("#shoppingContent"); //select the shopping content
   const menBtn = $("#menBtn"); //select the men button
   const womenBtn = $("#womenBtn"); //select the women button
   const menCont = $("#menContent"); //select the men content
   const womenCont = $("#womenContent"); //select the women content

  //hide elements
   menuCont.hide();
   shopCont.hide();
   menCont.hide();
   womenCont.hide();

  //error handling 
   if (!menuBtn || !shopBtn || !menuCont || !shopCont || !menBtn || !womenBtn || !menCont || !womenCont) {
    console.error("Missing Elements - handle menu options -");
   }

  //show/hide menu options
   menuBtn.on("click", function (){
    menuCont.toggle();
   }); 
   shopBtn.on("click", function (){
    shopCont.toggle();
   }); 
   menBtn.on("click", function (){
    menCont.toggle();
    womenCont.hide()
   }); 
   womenBtn.on("click", function (){
    womenCont.toggle();
    menCont.hide();
   }); 

 //Show product description on image hover
   //variables
    const productDesc = $(".productDescriptionHomepage"); //select the product description
    const productImg = $(".productImg"); //select the product images

   //error handling
   if (!productDesc.length || !productImg.length){
    console.error("Missing elements in - show product description on image hover - ");
   }  

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
    showProductDesc(); //on page load
  

})

//Please visit the Attributions Folder for copyright and crediting information of third parties resources
//Please visit the License File for information regarding the license of thir project
//Please visit the Disclaimer File for important disclaimers regarding this project