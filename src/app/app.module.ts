import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeArticleComponent } from './home-article/home-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFeatureComponent,
    HomeArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
