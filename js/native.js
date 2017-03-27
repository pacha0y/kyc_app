
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

  
           //$('#actionContent').find('span').remove();

     	   //$('#actionContent').append('<span> customer Button Clicked </span');

     	   //$('#actionContent').append('<div style="visibility: hidden;" id="jqxWidget"><div id="window"><div>menu action</div><div><div style="direction: rtl;"><div><h3 style="text-align: right; direction: rtl;"></h3><p class="important-text"></p><div class="more-text" id="textcontent"></div></div></div></div></div></div>');

     	  /* $('#searchWidget').css('visibility','visible');

     	   $('#searchWidget').on('focus',function(){

     	   	      $('#searchBtn').jqxButton({width: 100, height: 40});
     	   });*/
            
           //document.getElementById('actionContent').style.visibility = 'visible';

           $('#window').jqxWindow('setContent','Sample content');
           $('#window').jqxWindow('setContent','<ul class="nav nav-pills nav-stacked"><li role="presentation" class="active"><button class="btn btn-default sub_menu_btn" id="search" onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-search"></span>  Search customer</button></li><li role="presentation"><button class="btn btn-default sub_menu_btn" id="accountActivity" onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-check"></span> Account activity</button></li><li role="presentation"><button class="btn btn-default sub_menu_btn" id="list" onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-folder-open">  Tax records</button></li></ul>')
               
     });

    $('#settingsBtn').on('click',function(){

         $('#actionContent').find('ul').remove();

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

     $('#window').jqxWindow({

        position: { x: offset.left -1, y: offset.top -1},
        rtl: true,
        resizable: false,
        width: 230,
        height: 400,
        draggable: false,
        content: function(){

        	//$('#searchBtn').jqxButton({width: 100, height: 40});
        }
 
      });

    $('#window').jqxWindow('bringToFront');

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

function CustomerAction(id)
{
    search_button = document.getElementById(id);
    alert("Am here");	
}
