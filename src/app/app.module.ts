import { MeterialModule } from './meterial/meterial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HeaderComponent } from './Components/landing-page/landingPageComps/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LegoHeroAreaComponent } from './Components/landing-page/landingPageComps/lego-hero-area/lego-hero-area.component';
import { HeroSecondLevelComponent } from './Components/landing-page/landingPageComps/hero-second-level/hero-second-level.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LegoHeroAreaComponent,
    HeroSecondLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
