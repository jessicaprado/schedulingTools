$(document).ready(function() {
// Photographers
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

//assists
	var bridalAssists = ["Alicia", "Andrew", 'Christy', 'Corrine', 'Courtney', 'Dan G', 'Dan F', 'Dawn', 'Denise S', 'Earl', 'Emily', 'Evelyn', 'George', 'Jaime', 'Jennifer M', 'John', 'Joselyn', 'Lindsay', 'Mercedes', 'Michael', 'Uma', 'Jorge', 'Stephanie B', 'Tina'];
	var familyAssists = ['Alicia', 'Andrew', 'Carla', 'Christy', 'Corrine', 'Courtney', 'Dan G', 'Dan F', 'Dawn', 'Denise S', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'Erica', 'Evelyn', 'George', 'Howie', 'J.R', 'Jackson', 'Jaime', 'John', 'Joselyn', 'Lindsay', 'Matt', 'Mercedes', 'Michael', 'Mike', 'Uma', 'Jorge', 'Stephanie B', 'Tina'];
	var studiosAssist = ['Alicia', 'Andrew', 'Carla', 'Cassie', 'Christy', 'Corrine', 'Courtney', 'Cyndi','Dan G', 'Dan F', 'Dawn', 'Denise B', 'Denise S', 'Diana', 'Dio', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'Erica', 'Evelyn', 'George', 'Howie', 'J.R', 'Jackson', 'Jaime', 'Jamie Lynn', 'Jennifer', 'John', 'Jon P', 'Joselyn', 'Kathryn', 'Matt', 'Mercedes', 'Mike', 'Uma', 'Jorge', 'Stephanie B', 'Tina', 'Trent', 'Yeni'];
	var mmdAssists = ['Andrew', 'Carla', 'Christy', 'Courtney', 'Cyndi', 'Dan G', 'Dawn', 'Denise B', 'Denise S', 'Dio', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'George', 'J.R', 'Jackson', 'Jaime', 'John', 'Joselyn', 'Kathryn', 'Matt', 'Mercedes', 'Mike', 'Uma', 'Stephanie B', 'Trent'];

	$('.assistFilter').hide();

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
    		var table = $("<tr class=" + wishes[i] + "><td>" + wishes[i] + "</td><td><button class='close' data-name=" + wishes[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	function dessertpartyTable() {
		for (var i = 0; i < dessertparty.length; i++) {	
    		var table = $("<tr class=" + dessertparty[i] + "><td>" + dessertparty[i] + "</td><td><button class='close' data-name=" + dessertparty[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function bridalTable() {
		for (var i = 0; i < bridal.length; i++) {	
    		var table = $("<tr class=" + bridal[i] + "><td>" + bridal[i] + "</td><td><button class='close' data-name=" + bridal[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function mkfamilyportraitTable() {
		for (var i = 0; i < mkfamilyportrait.length; i++) {	
    		var table = $("<tr class=" + mkfamilyportrait[i] + "><td>" + mkfamilyportrait[i] + "</td><td><button class='close' data-name=" + mkfamilyportrait[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function enhancedTable() {
		for (var i = 0; i < enhanced.length; i++) {	
    		var table = $("<tr class=" + enhanced[i] + "><td>" + enhanced[i] + "</td><td><button class='close' data-name=" + enhanced[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function miniTable() {
		for (var i = 0; i < mini.length; i++) {	
    		var table = $("<tr class=" + mini[i] + "><td>" + mini[i] + "</td><td><button class='close' data-name=" + mini[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function proposalTable() {
		for (var i = 0; i < proposal.length; i++) {	
    		var table = $("<tr class=" + proposal[i] + "><td>" + proposal[i] + "</td><td><button class='close' data-name=" + proposal[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function escapeTable() {
		for (var i = 0; i < escape.length; i++) {	
    		var table = $("<tr class=" + escape[i] + "><td>" + escape[i] + "</td><td><button class='close' data-name=" + escape[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function upgradedescapeTable() {
		for (var i = 0; i < upgradedescape.length; i++) {	
    		var table = $("<tr class=" + upgradedescape[i] + "><td>" + upgradedescape[i] + "</td><td><button class='close' data-name=" + upgradedescape[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function memoriesTable() {
		for (var i = 0; i < memories.length; i++) {	
    		var table = $("<tr class=" + memories[i] + "><td>" + memories[i] + "</td><td><button class='close' data-name=" + memories[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function broadwaymagicTable() {
		for (var i = 0; i < broadwaymagic.length; i++) {	
    		var table = $("<tr class=" + broadwaymagic[i] + "><td>" + broadwaymagic[i] + "</td><td><button class='close' data-name=" + broadwaymagic[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function dpagroupphotoTable() {
		for (var i = 0; i < dpagroupphoto.length; i++) {	
    		var table = $("<tr class=" + dpagroupphoto[i] + "><td>" + dpagroupphoto[i] + "</td><td><button class='close' data-name=" + dpagroupphoto[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function candiddocumentationTable() {
		for (var i = 0; i < candiddocumentation.length; i++) {	
    		var table = $("<tr class=" + candiddocumentation[i] + "><td>" + candiddocumentation[i] + "</td><td><button class='close' data-name=" + candiddocumentation[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function headshotTable() {
		for (var i = 0; i < headshot.length; i++) {	
    		var table = $("<tr class=" + headshot[i] + "><td>" + headshot[i] + "</td><td><button class='close' data-name=" + headshot[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function groupphotoTable() {
		for (var i = 0; i < groupphoto.length; i++) {	
    		var table = $("<tr class=" + groupphoto[i] + "><td>" + groupphoto[i] + "</td><td><button class='close' data-name=" + groupphoto[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function marketingTable() {
		for (var i = 0; i < marketing.length; i++) {	
    		var table = $("<tr class=" + marketing[i] + "><td>" + marketing[i] + "</td><td><button class='close' data-name=" + marketing[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function onlocationstudioTable() {
		for (var i = 0; i < onlocationstudio.length; i++) {	
    		var table = $("<tr class=" + onlocationstudio[i] + "><td>" + onlocationstudio[i] + "</td><td><button class='close' data-name=" + onlocationstudio[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function photopassTable() {
		for (var i = 0; i < photopass.length; i++) {	
    		var table = $("<tr class=" + photopass[i] + "><td>" + photopass[i] + "</td><td><button class='close' data-name=" + photopass[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function printersTable() {
		for (var i = 0; i < printers.length; i++) {	
    		var table = $("<tr class=" + printers[i] + "><td>" + printers[i] + "</td><td><button class='close' data-name=" + printers[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function floralTable() {
		for (var i = 0; i < headshot.length; i++) {	
    		var table = $("<tr class=" + headshot[i] + "><td>" + headshot[i] + "</td><td><button class='close' data-name=" + headshot[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	

	function ferrytalecruiseTable() {
		for (var i = 0; i < ferrytalecruise.length; i++) {	
    		var table = $("<tr class=" + ferrytalecruise[i] + "><td>" + ferrytalecruise[i] + "</td><td><button class='close' data-name=" + ferrytalecruise[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};	



$(document.body).on('click', '.close', function(){
	var closeThisRow = $(this).data('name');
	if ($('tr').hasClass(closeThisRow)) {
		$(this).parent().parent().remove();
	}
});

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