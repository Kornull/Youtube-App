import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { youtubeApiLink } from 'src/app/shared/constants';

@Injectable()
export class ApiClientInterceptor implements HttpInterceptor {
  private key: string = 'AIzaSyC03LNmvnUCjQZH9fGzYDftDF7PT2aW4NE';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestUrl = request.clone({
      url: `${youtubeApiLink}${request.url}`,
      setParams: {
        key: this.key,
      },
    });

    return next.handle(requestUrl).pipe(retry(1));
  }
}
