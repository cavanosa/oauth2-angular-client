import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let intReq = request;
    const token = this.tokenService.getAccessToken();
    if(token != null && request.url.includes('resource')) {
      intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq);
  }
}
