import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errormessage;
        if (error instanceof Response) {
            errormessage = "Error " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText;
        }
        else {
            errormessage = errormessage.toString();
        }
        console.log(errormessage);
        return Observable.throw(errormessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map