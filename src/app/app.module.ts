import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { IxModule } from '@siemens/ix-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VotingPageComponent,
    LeaderboardComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,CanvasJSAngularChartsModule,IxModule.forRoot(),FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
