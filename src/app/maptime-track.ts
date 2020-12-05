import { MaptimeLocationEvent } from '../maptime-location-event';

export class MaptimeTrack {
  subjectName: string;
  locationEvents: Array<MaptimeLocationEvent>;

  constructor(subjectName = 'Unnamed', locationEvents = [new MaptimeLocationEvent(27.97, -82.89)]) {
    this.subjectName = subjectName;
    this.locationEvents = locationEvents;
  }
}
