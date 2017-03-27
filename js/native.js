
     //$('#showMenuActionContent').jqxButton({width: 150, height: 40,textImageRelation: "imageBeforeText", textPosition: "left", imgSrc: "./images/woman.png"});

//  function load_sub_menu(id)
//  {
//  	sub_menu = document.getElementById('load_sub_menu')

//  	if (id == "customer")
//  	{
//  		sub_menu.innerHTML = "<a href='#'>Hello customer</a>"
	
//  	}else if (id == "home")
//  	{
//  		sub_menu.innerHTML = "<a href='#'>Hello home</a>"
//  	}

//  }

// alert(sub_menu)



 function addEventListeners() {

     /*$('#showWindowButton').mousedown(function () {

          $('#window').jqxWindow('open');
     });*/

    $('#customerBtn').on('click',function(){

  
           $('#actionContent').find('span').remove();

     	   $('#actionContent').append('<span> customer Button Clicked </span');

     	   $('#searchWidget').css('visibility','visible');

     	   $('#searchWidget').on('focus',function(){

     	   	      $('#searchBtn').jqxButton({width: 100, height: 40});
     	   });

               
     });

    $('#settingsBtn').on('click',function(){

         $('#actionContent').find('span').remove();

         $('#actionContent').append('<span>Settings button clicked</span>');
    });

   
    $('#homeBtn').on('click',function(){

         $('#actionContent').find('span').remove();

         $('#actionContent').append('<span> home button clicked </span>');
    });
 }



 function createElements(){

 	 var jqxWidget = $('#jqxWidget');

     var offset = jqxWidget.offset();

     /*$('#window').jqxWindow({

        position: { x: offset.left -1, y: offset.top -22},
        rtl: true,
        resizable: false,
        width: 230,
        height: 400,
        draggable: false

      });*/

    // $('#window').jqxWindow('bringToFront');

    //$('#showWindowButton').jqxButton({ width: '100px' });

     $('#customerBtn').jqxButton({width: 180, height: 40});
   
     $('#settingsBtn').jqxButton({width: 180, height: 40});
 
     $('#homeBtn').jqxButton({width: 180, height: 40});

     

    // $("#showMenuActionContent").jqxButton({ width: 150, height: 40, imgPosition: "left", textPosition: "left", imgSrc: "./images/woman.png", textImageRelation: "imageBeforeText" });


     
 }



$(document).ready(function(){

      console.log("testing the code now..");

      addEventListeners();

      createElements();

      $("#jqxWidget").css('visibility', 'visible');

      $("#searchWidget").css('visibility','hidden');

});
