function enquire_form(enquiry_form){
	console.log(enquiry_form)

	 emailjs.sendForm("gmail","enquiry",enquiry_form);
	//  emailjs.sendForm("gmail","enquiry",enquiry_form).then(function(response) {
	//  	console.log("response",response);
	//  }, function(err) {
	//  	console.log("err",err);
	// });

	 var count = 0;
	 while(count < 100){
	 	count = + 1;
	 }
}

function contact_us(contact){
	console.log(contact)

	 emailjs.sendForm("gmail","contact_us",contact);
	//  emailjs.sendForm("gmail","contact_us",contact).then(function(response) {
	//  	console.log("response",response);
	//  }, function(err) {
	//  	console.log("err",err);
	// });

	 var count = 0;
	 while(count < 10000){
	 	count = + 1;
	 }
}