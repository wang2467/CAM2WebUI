$('#registerform').submit(function() {
    // Get all the forms elements and their values in one step
    //var values = $(this).serialize();

    if ($('#password').val() == $('#cpassword').val()) {
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
    } else {
    	console.log("password not match")
    }

    

});