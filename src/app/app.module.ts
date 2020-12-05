import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MaptimeMapComponent } from '../maptime-map/maptime-map.component';
import { MaptimeTrackComponent } from '../maptime-track/maptime-track.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
      MaptimeMapComponent,
      MaptimeTrackComponent
   ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkDG4-6DVvY_CCSRmPtOcM1PEPEzDaGk8'
    }),
    AgmSnazzyInfoWindowModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
