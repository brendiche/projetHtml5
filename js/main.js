$(document).ready(function(){

var yetVisited = localStorage['visited'];
    if (!yetVisited) {
        // open popup
        localStorage['visited'] = "yes";


        $.get('./dialog/first.html',function(data){
        	$( "#dialog" ).html(data);
        },'html');

        $( "#dialog" ).dialog({
	      autoOpen: true,
	      height: 300,
	      width: 350,
	      modal: true	      
	      }
	    );

	    console.log('Premiere connexion');
 
    }else
    console.log('déja connecté ');


});