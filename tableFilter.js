$(document).ready(function() {
  
console.log("done");
  $( function() {
    var availableTags = [
		"Wishes",
		"Dessert Party",
		"Bridal",
		"MK Family Portrait",
		"enhanced",
		"mini", 
		"proposal", 
		"escape", 
		"upgraded escape", 
		"memories", 
		"braodway magic", 
		"dpa group photo", 
		"candid documentation", 
		"headshot", 
		"group photo", 
		"marketing", 
		"on-location studio", 
		"photopass", 
		"printers"
    	];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
}); // end ready