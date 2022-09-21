import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = sessionStorage.getItem('token');
    if (token) {
      return next.handle(request.clone(
        {
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        }
      ));
    } else {
      return next.handle(request);
    }
  }
}
