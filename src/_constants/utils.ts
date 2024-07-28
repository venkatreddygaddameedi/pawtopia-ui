import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APIResult } from "src/_models/api-result.model";

export class Utils {

    public static handleAPIError(error: HttpErrorResponse): Observable<APIResult> {
        let result: APIResult = {
            isSuccess: false,
            message: error.message || 'An unknown error occurred',
            data: null // or you can add more specific error info if needed
        };

        // Optionally, you can log the error to the console or send it to a logging service.
        console.error('API call failed:', result.message);

        return of(result); // Wrap the error in an APIResult and return it
    }

}