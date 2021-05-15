window.onload = function () {
    var failureMessage = {
        responseText: {
            failure: true,
            errorMessage: "Unhandled Exception"
        }
    };
    if (ErrorHelper.containsErrors(failureMessage)) {
        ErrorHelper.trace(failureMessage);
    }
};
//# sourceMappingURL=app.js.map