
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


    $('#customerBtn').on('click',function(){

    	buttons = '<ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">';
    	buttons += '<button class="btn btn-default sub_menu_btn" id="search" onclick="CustomerAction(this.id)">';
    	buttons += '<span class="glyphicon glyphicon-search pull-left"></span>  Search customer</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="accountActivity"';
    	buttons += ' onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-check pull-left"></span>';
    	buttons += 'Account activity</button></li><li role="presentation" class="active">';
    	buttons += '<button class="btn btn-default sub_menu_btn" id="search" onclick="CustomerAction(this.id)">';
    	buttons += '<span class="glyphicon glyphicon-folder-open pull-left"></span>  Tax records</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="immigration-records"';
    	buttons += 'onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-book pull-left"></span>';
    	buttons += 'Immigration records</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="criminal-records"';
    	buttons += 'onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-link pull-left"></span>';
    	buttons += 'Criminal record</button></li></ul>';

        document.getElementById("actionContent-item").innerHTML = buttons;
     });

    $('#settingsBtn').on('click',function(){

        document.getElementById("actionContent-item").innerHTML ='';

        buttons = '<ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">';
        buttons += '<button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">';
        buttons += '<span class="glyphicon glyphicon-briefcase pull-left"></span>  Manage User</button></li></ul>';

        document.getElementById('actionContent-item').innerHTML = buttons;

    });

   
    $('#homeBtn').on('click',function(){

    	document.getElementById("actionContent-item").innerHTML ='';

    });

    $('#reportsBtn').on('click',function(){

    	document.getElementById("actionContent-item").innerHTML ='';

    });
 }



 function createElements(){

 	 var jqxWidget = $('#jqxWidget');

     var offset = jqxWidget.offset();

     /*$('#window').jqxWindow({

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

    $('#window').jqxWindow('bringToFront');*/

    //$('#showWindowButton').jqxButton({ width: '100px' });

     $('#customerBtn').jqxButton({width: 180, height: 40});
   
     $('#settingsBtn').jqxButton({width: 180, height: 40});
 
     $('#homeBtn').jqxButton({width: 180, height: 40});

     $('#reportsBtn').jqxButton({width: 180, height: 40});

     

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
