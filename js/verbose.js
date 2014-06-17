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
