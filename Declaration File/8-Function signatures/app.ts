window.onload = () => {
	var callBack = function (message: string) {
		alert(message);
	}

	myFunction("HAMED KHATAMI", callBack);
}