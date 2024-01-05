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

    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");

    // Create an image object
    var img = new Image();

    // Set the source of the image (replace 'path/to/your/image.png' with the actual path)
    img.src = '/mapfiles/basemap.png';

    // Draw the image onto the canvas when it's loaded
    img.onload = function() {
        context.drawImage(img, 0, 0);
    };
});