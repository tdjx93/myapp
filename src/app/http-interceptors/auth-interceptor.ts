import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authenticationRequest = request.clone(
      {
        headers: sessionStorage.getItem('token') ?
          request.headers.set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
          : request.headers.set('test', 'test')
      }
    );
    return next.handle(authenticationRequest);
  }
}
