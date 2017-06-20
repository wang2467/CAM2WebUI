console.log("abcde");

$('#registerform').submit(function() {
    // Get all the forms elements and their values in one step
    console.log("hello world")
    var values = $(this).serialize();
    console.log(values);

});