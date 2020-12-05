import { Component, OnInit, ViewChild } from '@angular/core';
import { MaptimeLocationEvent } from '../maptime-location-event';
import { MaptimeTrack } from './maptime-track';
import { SharedTrackService } from './shared-track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Maptime';
  storedTracks: Array<MaptimeTrack> = [];
  track = new MaptimeTrack();

  @ViewChild('newTrackName') inputName; // accessing the reference element

  constructor(private otrack: SharedTrackService) { }

  ngOnInit(): void {
    console.log('In AppComponent.ngOnInit()');

    this.track.subjectName = 'Unnamed';
    this.otrack.currentTrack.subscribe(track => this.track = track);

    console.log('Finishing up AppComponent.ngOnInit()');
  }

  onSaveTrack(): void {

    this.storedTracks.push(this.track);
    this.track = new MaptimeTrack();
    // clear the just-saved name from the input field
    this.inputName.nativeElement.value = ' ';

    this.otrack.changeTrack(this.track);
  }

  onUpdateTrackName(event: Event): void {
    this.track.subjectName = (event.target as HTMLInputElement).value;
    this.otrack.changeTrack(this.track);
  }

  onReplaceTrack(index: number): void {
    this.otrack.changeTrack(this.storedTracks[index]);
  }
}
