$(document).ready(function() {
	var value = "";

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
		"Broadway Magic", 
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

    //if user enter on event
	$("#tags").keydown(function(event){
		
		if(event.keyCode == 13) {
			value = $("#tags").val()

			console.log(value);

			//Clear search field after submit
			$("#tags").val("");

			return false;
		}
	}); // End of keydown event
  
}); // end ready