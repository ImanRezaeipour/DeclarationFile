window.onload = () => {
	for (var index: number = 0; index < CONTACT_EMAILS.length; index++) {
		var contactEmail: IEmailContact = CONTACT_EMAILS[index];

		console.log("This email address is " + contactEmail.email + " and the display name is " + contactEmail.displayname);
	}
}