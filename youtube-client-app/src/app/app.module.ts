import { StoreModule } from '@ngrx/store';

import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { ApiClientInterceptor } from './core/interceptors/api-client.interceptor';
import { VideoCardsReducer } from './core/store/redux/video.reducer';
import { VideoEffects } from './core/store/redux/video.effects';

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot({
      VIDEOS: VideoCardsReducer,
    }),
    EffectsModule.forRoot([VideoEffects]),
  ],
})
export class AppModule {}
