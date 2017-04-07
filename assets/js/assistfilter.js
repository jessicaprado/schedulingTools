//assists
	var bridalAssists = ["Alicia", "Andrew", 'Christy', 'Corrine', 'Courtney', 'Dan G', 'Dan F', 'Dawn', 'Denise S', 'Earl', 'Emily', 'Evelyn', 'George', 'Jaime', 'Jennifer M', 'John', 'Joselyn', 'Lindsay', 'Mercedes', 'Michael', 'Uma', 'Jorge', 'Stephanie B', 'Tina'];
	var familyAssists = ['Alicia', 'Andrew', 'Christy', 'Corrine', 'Courtney', 'Dan G', 'Dan F', 'Dawn', 'Denise S', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'Erica', 'Evelyn', 'George', 'Howie', 'J.R', 'Jackson', 'Jaime', 'John', 'Joselyn', 'Lindsay', 'Matt', 'Mercedes', 'Michael', 'Mike', 'Uma', 'Jorge', 'Stephanie B', 'Tina'];
	var studiosAssist = ['Alicia', 'Andrew', 'Cassie', 'Christy', 'Corrine', 'Courtney', 'Cyndi','Dan G', 'Dan F', 'Dawn', 'Denise B', 'Denise S', 'Diana', 'Dio', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'Erica', 'Evelyn', 'George', 'Howie', 'J.R', 'Jackson', 'Jaime', 'Jamie Lynn', 'Jennifer', 'John', 'Jon P', 'Joselyn', 'Kathryn', 'Matt', 'Mercedes', 'Mike', 'Uma', 'Jorge', 'Stephanie B', 'Tina', 'Trent', 'Yeni'];
	var mmdAssists = ['Andrew', 'Christy', 'Courtney', 'Cyndi', 'Dan G', 'Dawn', 'Denise B', 'Denise S', 'Dio', 'Earl', 'Eddie', 'Emily', 'Eric H', 'Eric W', 'George', 'J.R', 'Jackson', 'Jaime', 'John', 'Joselyn', 'Kathryn', 'Matt', 'Mercedes', 'Mike', 'Uma', 'Stephanie B', 'Trent'];
	

	$('.assists').on('click', function(){
		$('.photographerEvent').hide();
		$('.assistEvent').show();
	})

	function assistSort() {
		bridalAssists = bridalAssists.sort();
		familyAssists = familyAssists.sort();
		studiosAssist = studiosAssist.sort();
		mmdAssists = mmdAssists.sort();
	};


	function bridalAssistTable() {
		for (var i = 0; i < bridalAssists.length; i++) {	
    		var table = $("<tr class=" + bridalAssists[i] + "><td>" + bridalAssists[i] + "</td><td><button style='color:transparent' class='close' data-name=" + bridalAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};
	

	function familyAssistTable() {
		for (var i = 0; i < familyAssists.length; i++) {	
    		var table = $("<tr class=" + familyAssists[i] + "><td>" + familyAssists[i] + "</td><td><button style='color:transparent' style='color:transparent' style='color:transparent' class='close' data-name=" + familyAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	function studioAssistTable() {
		for (var i = 0; i < studiosAssist.length; i++) {	
    		var table = $("<tr class=" + studiosAssist[i] + "><td>" + studiosAssist[i] + "</td><td><button style='color:transparent' style='color:transparent' class='close' data-name=" + studiosAssist[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	function mmdAssistTable() {
		for (var i = 0; i < mmdAssists.length; i++) {	
    		var table = $("<tr class=" + mmdAssists[i] + "><td>" + mmdAssists[i] + "</td><td><button style='color:transparent' class='close' data-name=" + mmdAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	$(document.body).on('click', '.close', function(){
		var closeThisRow = $(this).data('name');
		if ($('tr').hasClass(closeThisRow)) {
			$(this).parent().parent().remove();
		}
	});

	$('.bridalAssists').click(function(){
		$(".table").empty();
		assistSort();
	    bridalAssistTable()
	});	

	$('.familyAssists').click(function(){
		$(".table").empty();
		assistSort();
	    familyAssistTable()
	});	

	$('.studiosAssist').click(function(){
		$(".table").empty();
		assistSort();
	    studioAssistTable()
	});	

	$('.mmdAssists').click(function(){
		$(".table").empty();
		assistSort();
	    mmdAssistTable()
	});	

