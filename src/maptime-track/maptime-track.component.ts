import { Component, OnInit } from '@angular/core';
import { MaptimeTrack} from '../app/maptime-track';
import { MaptimeLocationEvent } from '../maptime-location-event';
import { SharedTrackService } from '../app/shared-track.service';

@Component({
  selector: 'app-maptime-track',
  templateUrl: './maptime-track.component.html',
  styleUrls: ['./maptime-track.component.css']
})
export class MaptimeTrackComponent implements OnInit {

  track = new MaptimeTrack('Winslow', [new MaptimeLocationEvent(51.678418, 7.809007)]);

  constructor(private otrack: SharedTrackService) { }

  ngOnInit(): void {
    this.otrack.currentTrack.subscribe(track => this.track = track);
  }

}
