window.onload = () => {
	var failureMessage: IResponse = {
		responseText: {
			failure: true,
			errorMessage: "Unhandled Exception"
		}
	};

	if (ErrorHelper.containsErrors(failureMessage)) {
		ErrorHelper.trace(failureMessage);
	}
}