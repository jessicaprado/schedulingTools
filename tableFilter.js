$(document).ready(function() {

    var events = {
    	data: [
		"Wishes",
		"Dessert Party",
		"Bridal",
		"MK Family Portrait",
		"Enhanced",
		"Mini", 
		"Proposal", 
		"Escape", 
		"Upgraded Escape", 
		"Memories", 
		"Braodway Magic", 
		"DPA Group Photo", 
		"Candid Documentation", 
		"Headshot", 
		"Group Photo", 
		"Marketing", 
		"On-Location Studio", 
		"Photopass", 
		"Printers"
    	]
    };
    
    $( "#tags" ).easyAutocomplete(events);
  
}); // end ready