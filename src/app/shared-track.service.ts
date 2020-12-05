import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MaptimeTrack} from '../app/maptime-track';

@Injectable({
  providedIn: 'root'
})
export class SharedTrackService {

  private trackSource = new BehaviorSubject<MaptimeTrack>(new MaptimeTrack());
  currentTrack = this.trackSource.asObservable();

  // We can add discrete push/add and remove methods for individual locEvents later,
  // but for now we are testing by just replacing the entire track.
  changeTrack(newTrack: MaptimeTrack): void {
    this.trackSource.next(newTrack);
  }

}
