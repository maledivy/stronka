
$(window).load(function() {

	setTimeout(function() { // Remove this on production

		$("#preloader").fadeOut();
		setTimeout(function() {
			$("#preloader").remove();
			//show overflow $("body").css("overflow","auto");
		}, 200);	
	}, 1500);
	
});