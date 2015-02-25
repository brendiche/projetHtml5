$(document).ready(function(){
var yetVisited = localStorage['visited'];
    if (!yetVisited) {
        // open popup
        localStorage['visited'] = "yes";


        $( "#dialog-form" ).dialog({
	      autoOpen: true,
	      height: 300,
	      width: 350,
	      modal: true,
	      
	      }
	    );
 
    }


});