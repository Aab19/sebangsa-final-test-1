$(document).ready(function() {
	$('#opt-chat-trigger').click(function() {
		$('#opt-chat-head').toggleClass('opt-overlay_show');	
	});

	$('#opt-input-trigger').click(function() {
		$('#opt-input-plus').toggleClass('opt-overlay_show');	
	});

	$('.chat__body').click(function() {
		$('#opt-chat-head').addClass('opt-overlay_show');
	});

});
