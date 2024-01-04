$(document).ready(function() {
    // Attach click event to the button with id btnSitte
    $("#btnSitte").on("click", function() {
        // Toggle class 'hidden' for element with id 'rowsmap'
        $("#rowsmap").toggleClass("hidden");
        // Toggle class 'active' for the button itself
        $(this).toggleClass("active");
    });

    $("#btnStands").on("click", function() {
        // Toggle class 'hidden' for element with id 'rowsmap'
        $("#standsmap").toggleClass("hidden");
        // Toggle class 'active' for the button itself
        $(this).toggleClass("active");
    });
});