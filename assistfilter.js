	function assistSort() {
		bridalAssists = bridalAssists.sort();
		familyAssists = familyAssists.sort();
		studiosAssist = studiosAssist.sort();
		mmdAssists = mmdAssists.sort();
	};

	function bridalAssistTable() {
		for (var i = 0; i < bridalAssists.length; i++) {	
    		var table = $("<tr class=" + bridalAssists[i] + "><td>" + bridalAssists[i] + "</td><td><button class='close' data-name=" + bridalAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};
	

	function familyAssistTable() {
		for (var i = 0; i < familyAssists.length; i++) {	
    		var table = $("<tr class=" + familyAssists[i] + "><td>" + familyAssists[i] + "</td><td><button class='close' data-name=" + familyAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	function studioAssistTable() {
		for (var i = 0; i < studiosAssist.length; i++) {	
    		var table = $("<tr class=" + studiosAssist[i] + "><td>" + studiosAssist[i] + "</td><td><button class='close' data-name=" + studiosAssist[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};

	function mmdAssistTable() {
		for (var i = 0; i < mmdAssists.length; i++) {	
    		var table = $("<tr class=" + mmdAssists[i] + "><td>" + mmdAssists[i] + "</td><td><button class='close' data-name=" + mmdAssists[i] + "> I already asked! </button></td></tr>");
    		$(table).appendTo(".table");
		}};
	