import { Component, OnInit } from '@angular/core';
import { MaptimeTrack} from '../app/maptime-track';
import { MaptimeLocationEvent } from '../maptime-location-event';
import { SharedTrackService } from '../app/shared-track.service';

@Component({
  selector: 'app-maptime-map',
  templateUrl: './maptime-map.component.html',
  styleUrls: ['./maptime-map.component.css']
})
export class MaptimeMapComponent implements OnInit {

  latestLocEventIcon = 'assets/img/manatee-map-pin.png';
  showBubbleMarker = true;
  track = new MaptimeTrack();

  constructor(private otrack: SharedTrackService) { }

  ngOnInit(): void {

    console.log('In ngOnInit()');

    if (!navigator.geolocation) {
      console.log('Location is not supported on this device. Creating an arbitrary (and German) center point.');
      const locEvent = new MaptimeLocationEvent(51.678418, 7.809007);
      console.log(locEvent);
      this.track.locationEvents[0] = locEvent;
      this.otrack.currentTrack.subscribe(track => this.track = track);
      this.otrack.changeTrack(this.track);
    } else {
      // user this async method to determine device's location...
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Yippee! Location is supported on this device.');
        const locEvent = new MaptimeLocationEvent(position.coords.latitude, position.coords.longitude);
        console.log(locEvent);
        this.otrack.currentTrack.subscribe(track => this.track = track);
        this.otrack.changeTrack(this.track);
      });
    }

    console.log('Finishing up ngOnInit()');
  }

  onChoseLocation(event): void {
    const locEvent = new MaptimeLocationEvent(event.coords.lat, event.coords.lng);
    this.track.locationEvents.push(locEvent);
    this.otrack.changeTrack(this.track);
    console.log(locEvent);
    console.log(this.track.locationEvents.length);
  }

}
