import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VotingPageComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,CanvasJSAngularChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
