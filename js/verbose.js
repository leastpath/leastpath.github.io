$(document).ready(function() {
    $('a.verbose').click(function() {
        $('#what').toggle(150);
        $('#where').toggle(150);
        $('#when').toggle(150);
        $('#why').toggle(150);
        $('#how').toggle(150);
        return false;
    });
});
$(document).ready(function() {
    $('a.contact').click(function() {
        $('#contact').fadeTo(200, 0.1);
        $('#contact').css('background-color', '#fafa33');
        $('#contact').css('padding', '10px 20px 0 20px');
        $('#contact').fadeTo(1000, 1.0);
	return true;
    });
});
