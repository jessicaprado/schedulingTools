$(document).ready(function() {

	var wishes = ["Ty", "Trent", "Tina", "Stephanie", "Rick", "Pedro", "Mike", "Ali", "Amanda", "Amy", "Beth", "Brittany", "Chris", "Daniel", "Daryn", "Dawn", "Dean", "Jacob", "Jaime", "Joe", ];
	var dessertparty = ["Ty", "Trent", "Tina", "Stephanie", "Rick", "Pedro", "Mike", "Ali", "Amanda", "Amy", "Beth", "Brittany", "Chris", "Daniel", "Daryn", "Dawn", "Dean", "Emily", "Jacob", "Jaime", "Joe", ];
	var bridal = ["Ty", "Rick", "Amy", "Beth", "Joe", "Mike", "Ty", "Amanda", "Chris", "Jacob", "Stephanie", "Rick", "Daniel", "Ali", "Pedro", "Jaime", "Dawn"];
	var mkfamilyportrait = ["Stephanie", "Rick", "Pedro", "Mike", "Amanda", "Amy", "Beth", "Brittany", "Chris", "Daniel", "Dawn", "Jacob", "Jaime", "Jake", ];
	var enhanced = ["Ty", "Stephanie", "Rick", "Pedro", "Mike", "Amanda", "Amy", "Beth", "Joe", "Brittany", "Chris", "Dan", "Daniel", "Daryn", "Dawn", "Dean", "Earl", "Emily", "Jackson", "Jaime", "Jake", ];
	var mini = ["Michael", "Mercedes", "Joselyn", "Andrew", "Carla", "Christy", "Dan", "Dawn", "Dio", "Earl", "Emily", "Eric", "Jackson", "Jaime", ];
	var proposal = ["Michael", "Joselyn", "John", "Ali", "Daryn", "Dawn", "Earl", "Emily", "Jacob", "Jaime", "Jake", ];
	var escape = ["Ty", "Stephanie", "Rick", "Pedro", "Mike", "Joe", "Ali", "Amanda", "Amy", "Beth", "Brittany", "Chris", "Daniel", "Daryn", "Dean", "Jacob", "Jaime", ];
	var upgradedescape = ["Ty", "Trent", "Tina", "Stephanie", "Rick", "Pedro", "Mike", "Joe", "Ali", "Amanda", "Amy", "Beth", "Brittany", "Chris", "Daniel", "Daryn", "Dawn", "Dean", "Jacob", "Jaime", ];
	var memories = ["Ty", "Stephanie", "Rick", "Pedro", "Mike", "Joe", "Ali", "Amanda", "Amy", "Beth", "Brittany", "Daniel", "Daryn", "Dean", "Jacob", "Jaime", ];
	var broadwaymagic = ["Trent", "Michael", "Joselyn", "John", "Joe", "Ali", "Amanda", "Daniel", "Daryn", "Dawn", "Dean", "Earl", "Emily", "Jacob", "Jaime", "Jake", "Jessica", ];
	var dpagroupphoto = ["Joselyn", "John", "Dan", "Daryn", "Dawn", "Dean", "Earl", "Emily", "Jacob", "Jaime", "Jake", ];
	var candiddocumentation = ["Trent", "Tina", "Joselyn", "John", "Ali", "Daryn", "Dawn", "Dean", "Earl", "Emily", "Jacob", "Jaime", "Jake", ];
	var headshot = ["Mike", "Joe", "Amanda", "Daniel", "Hillary", "Jacob", ];
	var groupphoto = ["Joe", "Ali", "Daryn", "Dawn", "Dean", "Earl", "Jacob", "Jaime", "Jake", ];
	var marketing = ["John", "Ali", "Daniel", "Jacob", "Jaime", "Jake", ];
	var onlocationstudio = ["Trent", "Tina", "Pedro", "Uma", "Michael", "Mercedes", "Meg", "Matt", "Joselyn", "John", "Ali", "Amanda", "Dan", "Daryn", "Jessica", "Dawn", "Dean", "Dio", "Earl", "Eddie", "Emily", "Eric", "Jackson", "Jake", "Jacob", "Jaime", ];
	var photopass = ["Trent", "Tina", "Uma", "Michael", "Mercedes", "Meg", "Matt", "Joselyn", "John", "Dan", "Dawn", "Dean", "Dio", "Earl", "Eddie", "Emily", "Eric", "Jackson", "Jaime", "Jake", ];
	var printers = ["Uma", "Joselyn", "John", "Amanda", "Dawn", "Dean", "Earl", "Hillary", "Jacob", "Jake", ];
	var floral = ["Jon", "John", "Mercedes"];
	var ferrytalecruise = ["Eddie", "Jaime", "Meg", "J.R", "Matt", "Uma", "Eric", "Dio", "Cyndi"];

	function sort() {
		bridal = bridal.sort();
		wishes = wishes.sort();
		dessertparty = dessertparty.sort();
		mkfamilyportrait = mkfamilyportrait.sort();
		enhanced = enhanced.sort();
		mini = mini.sort();
		proposal = proposal.sort();
		escape = escape.sort();
		upgradedescape = upgradedescape.sort();
		memories = memories.sort();
		broadwaymagic = broadwaymagic.sort();
		dpagroupphoto = dpagroupphoto.sort();
		candiddocumentation = candiddocumentation.sort();
		headshot = headshot.sort();
		groupphoto = groupphoto.sort();
		marketing = marketing.sort();
		onlocationstudio = onlocationstudio.sort();
		photopass = photopass.sort();
		printers = printers.sort();
		floral = floral.sort();
		ferrytalecruise = ferrytalecruise.sort();
		};

	function wishesTable() {
		for (var i = 0; i < wishes.length; i++) {	
    		var table = $("<tr><td>" + wishes[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};

	function dessertpartyTable() {
		for (var i = 0; i < dessertparty.length; i++) {	
    		var table = $("<tr><td>" + dessertparty[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function bridalTable() {
		for (var i = 0; i < bridal.length; i++) {	
    		var table = $("<tr><td>" + bridal[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function mkfamilyportraitTable() {
		for (var i = 0; i < mkfamilyportrait.length; i++) {	
    		var table = $("<tr><td>" + mkfamilyportrait[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function enhancedTable() {
		for (var i = 0; i < enhanced.length; i++) {	
    		var table = $("<tr><td>" + enhanced[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function miniTable() {
		for (var i = 0; i < mini.length; i++) {	
    		var table = $("<tr><td>" + mini[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function proposalTable() {
		for (var i = 0; i < proposal.length; i++) {	
    		var table = $("<tr><td>" + proposal[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function escapeTable() {
		for (var i = 0; i < escape.length; i++) {	
    		var table = $("<tr><td>" + escape[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function upgradedescapeTable() {
		for (var i = 0; i < upgradedescape.length; i++) {	
    		var table = $("<tr><td>" + upgradedescape[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function memoriesTable() {
		for (var i = 0; i < memories.length; i++) {	
    		var table = $("<tr><td>" + memories[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function broadwaymagicTable() {
		for (var i = 0; i < broadwaymagic.length; i++) {	
    		var table = $("<tr><td>" + broadwaymagic[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function dpagroupphotoTable() {
		for (var i = 0; i < dpagroupphoto.length; i++) {	
    		var table = $("<tr><td>" + dpagroupphoto[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function candiddocumentationTable() {
		for (var i = 0; i < candiddocumentation.length; i++) {	
    		var table = $("<tr><td>" + candiddocumentation[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function headshotTable() {
		for (var i = 0; i < headshot.length; i++) {	
    		var table = $("<tr><td>" + headshot[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function groupphotoTable() {
		for (var i = 0; i < groupphoto.length; i++) {	
    		var table = $("<tr><td>" + groupphoto[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function marketingTable() {
		for (var i = 0; i < marketing.length; i++) {	
    		var table = $("<tr><td>" + marketing[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function onlocationstudioTable() {
		for (var i = 0; i < onlocationstudio.length; i++) {	
    		var table = $("<tr><td>" + onlocationstudio[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function photopassTable() {
		for (var i = 0; i < photopass.length; i++) {	
    		var table = $("<tr><td>" + photopass[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function printersTable() {
		for (var i = 0; i < printers.length; i++) {	
    		var table = $("<tr><td>" + printers[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function floralTable() {
		for (var i = 0; i < headshot.length; i++) {	
    		var table = $("<tr><td>" + headshot[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	

	function ferrytalecruiseTable() {
		for (var i = 0; i < ferrytalecruise.length; i++) {	
    		var table = $("<tr><td class='ferrytalecruise'>" + ferrytalecruise[i] + "</td></tr>");
    		$(table).appendTo(".table");
		}};	




$('.wishes').click(function(){
	$(".table").empty();
	sort();
    wishesTable()
});

$('.dessertparty').click(function(){
	$(".table").empty();
	sort();
    dessertpartyTable()
});

$('.bridal').click(function(){
	$(".table").empty();
	sort();
    bridalTable()
});

$('.mkfamilyportrait').click(function(){
	$(".table").empty();
	sort();
    mkfamilyportraitTable()
});

$('.enhanced').click(function(){
	$(".table").empty();
	sort();
    enhancedTable()
});

$('.mini').click(function(){
	$(".table").empty();
	sort();
    miniTable()
});

$('.proposal').click(function(){
	$(".table").empty();
	sort();
    proposalTable()
});

$('.escape').click(function(){
	$(".table").empty();
	sort();
    escapeTable()
});

$('.upgradedescape').click(function(){
	$(".table").empty();
	sort();
    upgradedescapeTable()
});

$('.memories').click(function(){
	$(".table").empty();
	sort();
    memoriesTable()
});

$('.broadwaymagic').click(function(){
	$(".table").empty();
	sort();
    broadwaymagicTable()
});

$('.dpagroupphoto').click(function(){
	$(".table").empty();
	sort();
    dpagroupphotoTable()
});

$('.candiddocumentation').click(function(){
	$(".table").empty();
	sort();
    candiddocumentationTable()
});

$('.headshot').click(function(){
	$(".table").empty();
	sort();
    headshotTable()
});

$('.groupphoto').click(function(){
	$(".table").empty();
	sort();
    groupphotoTable()
});

$('.marketing').click(function(){
	$(".table").empty();
	sort();
    marketingTable()
});

$('.onlocationstudio').click(function(){
	$(".table").empty();
	sort();
    onlocationstudioTable()
});

$('.photopass').click(function(){
	$(".table").empty();
	sort();
    photopassTable()
});

$('.printers').click(function(){
	$(".table").empty();
	sort();
    printersTable()
});

$('.floral').click(function(){
	$(".table").empty();
	sort();
    floralTable()
});

$('.ferrytalecruise').click(function(){
	$(".table").empty();
	sort();
    ferrytalecruiseTable()
});

}); // end ready