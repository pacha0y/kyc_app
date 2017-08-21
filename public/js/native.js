function addEventListeners() {


    $('#customerBtn').on('click',function(){

    	buttons = '<ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">';
    	buttons += '<button class="btn btn-default sub_menu_btn" id="search_customer" onclick="CustomerAction(this.id)">';
    	buttons += '<span class="glyphicon glyphicon-search pull-left"></span>  Search customer</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="account_activity"';
    	buttons += ' onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-check pull-left"></span>';
    	buttons += 'Account activity</button></li><li role="presentation" class="active">';
    	buttons += '<button class="btn btn-default sub_menu_btn" id="tax_records" onclick="CustomerAction(this.id)">';
    	buttons += '<span class="glyphicon glyphicon-folder-open pull-left"></span>  Tax records</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="immigration_records"';
    	buttons += 'onclick="CustomerAction(this.id)"><span class="glyphicon glyphicon-book pull-left"></span>';
    	buttons += 'Immigration records</button></li>';
    	buttons += '<li role="presentation"><button class="btn btn-default sub_menu_btn" id="criminal_records"';
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

    $('#reportsBtn').on('click',function(){

      document.getElementById("actionContent-item").innerHTML ='';

      buttons = '<div class="panel-group sub_menu_with_accordion" id="accordion">\
    <div class="panel panel-default">\
      <div class="panel-heading">\
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">\
          <span class="glyphicon glyphicon-file pull-left"></span>Collapsible Group 1</a>\
      </div>\
      <div id="collapse1" class="panel-collapse collapse">\
        <ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li>\
        <li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li></ul></div>\
    </div>\
    <div class="panel panel-default">\
      <div class="panel-heading">\
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">\
          <span class="glyphicon glyphicon-file pull-left"></span>Collapsible Group 2</a>\
      </div>\
      <div id="collapse2" class="panel-collapse collapse">\
        <ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li>\
        <li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li></ul>\
    </div>\
    </div>\
    <div class="panel panel-default">\
      <div class="panel-heading">\
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">\
          <span class="glyphicon glyphicon-file pull-left"></span>Collapsible Group 3</a>\
      </div>\
      <div id="collapse3" class="panel-collapse collapse">\
        <ul class="nav nav-pills nav-stacked"><li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li>\
        <li role="presentation" class="active">\
        <button class="btn btn-default sub_menu_btn" id="manage-user" onclick="CustomerAction(this.id)">\
        <span class="glyphicon glyphicon-briefcase pull-left"></span>Manage User</button></li></ul>\
    </div>\
    </div>\
  </div>';

      document.getElementById("actionContent-item").innerHTML = buttons;

     });

   
    $('#homeBtn').on('click',function(){

    	document.getElementById("actionContent-item").innerHTML ='';

    });

    $('#aboutBtn').on('click',function(){

        document.getElementById("actionContent-item").innerHTML ='About button clicked'
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

     $('#aboutBtn').jqxButton({width: 180, height: 40});

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
    container = document.getElementById('chartContainer');
    var template;
    var xmlhttp=new XMLHttpRequest();
    switch(id) {
        case "search_customer":
            template = "search.html";
            break;
        case "account_activity":
            template = "account_activity.html";
            break;
        case 'tax_records':
            template = "tax_records.html";
            break;
        case 'immigration_records':
            template = "immigration_records.html";
            break;
        case 'criminal_records':
            template = "criminal_records.html";
            break;
        default:
            html_code = '';
    }
    xmlhttp.open('GET',template , false);
    xmlhttp.send();
    container.innerHTML = xmlhttp.response
}

function viewcustomer(id)
{
    container = document.getElementById('chartContainer');
    var view_template = 'view_customer.html';
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open('GET',view_template , false);
    xmlhttp.send();
    container.innerHTML = xmlhttp.response

}
