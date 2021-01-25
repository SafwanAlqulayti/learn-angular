import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { HeadComponent } from './body/head/head.component';
import { MainComponent } from './body/main/main.component';
import { FootComponent } from './body/foot/foot.component';
import { ApiService } from './body/main/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogPageComponent } from './log-page/log-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardFrontComponent } from './flip-card/flip-card-front.component';
import { FlipCardBackComponent } from './flip-card/flip-card-back.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HeadComponent,
    MainComponent,
    FootComponent,
    HomeComponent,
    AboutComponent,
    LogPageComponent,
    FlipCardComponent,
    FlipCardBackComponent,
    FlipCardFrontComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'log', component: LogPageComponent },
      { path: 'cards', component: FlipCardComponent },


    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
