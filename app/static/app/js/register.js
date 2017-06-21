

$('#registerform').submit(function() {
    // Get all the forms elements and their values in one step
    //var values = $(this).serialize();

	$.ajax({
        url: 'some-url',
        type: 'post',
        dataType: 'json',
        data: $('this').serialize(),
        success: function(data) {
        	console.log(data);
        }
    });
    //console.log(values);    	
});
