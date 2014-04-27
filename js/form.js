$(document).ready(function(){
	console.log("Hello")
	$('#relationStatus').hide()
    $('input:radio').change(function() {
       if($('#roommateRelationRadioYes').is(':checked')) { $('#relationStatus').show(); }
       if($('#roommateRelationRadioNo').is(':checked')) { $('#relationStatus').hide(); }

    });

});