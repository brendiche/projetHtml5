$(document).ready(function(){

var yetVisited = localStorage['visited'];

	$.get('./dialog/first.html',function(data){
        	$( "#dialog_first" ).html(data);
        },'html');

    $.get('./dialog/formPersonne.html',function(data){
    		$( "#dialog_formPersonne" ).html(data);
            $("#list-image").hide();
            $('#buttonAvatar').click(function(){
             $( "#list-image" ).show();
            });
    	},'html');

    //création du modal premiere entrée
 	$( "#dialog_first" ).dialog({
          title: 'Bienvenue',
	      autoOpen: false,
	      height: 300,
	      width: 350,
	      modal: true,
	      close:function(event,ui){
	      	$("#dialog_formPersonne").dialog('open');
	      }
	  });

    //création enregistrement personne
	$("#dialog_formPersonne").dialog({
			  title:"Création d'une personne",
	      autoOpen: false,
	      height: 600,
	      width: 700,
	      modal: true,
	  });


    if (yetVisited) {
        // open popup
       // localStorage['visited'] = "yes";

       
        $( "#dialog_first" ).dialog('open');


	    console.log('Premiere connexion');
 
    }else{
    	console.log('déja connecté ');
    }
    




$('#createPersonne').click(function(){
	$("#dialog_formPersonne").dialog('open');
});



});