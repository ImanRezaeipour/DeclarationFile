declare module ErrorHelper {
	//function containsErrors(response: IResponse);
	//function containsErrors(response: IResponseString);
	function containsErrors(response: IResponse | IResponseString); //Instead Of up codes

	function trace(message: string | IResponse | IResponseString);
}

interface IResponse {
	responseText: IFailureMessage;
}

interface IFailureMessage {
	failure: boolean;
	errorMessage: string;
}

interface IResponseString {
	responseText: IFailureMessageString;
}

interface IFailureMessageString {
	failure: string;
	errorMessage: string;
}