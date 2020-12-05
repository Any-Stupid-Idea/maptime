export class MaptimeLocationEvent {
  lat = 0;
  lng = 0;
  readonly createdAt: Date = new Date();

  constructor(lat: number = 0, lng: number = 0) {
    this.lat = lat;
    this.lng = lng;
  }

  toString(): string {
    return `Lat: ${ this.lat.toString() }, Long: ${ this.lng.toString() }, Created: ${ this.createdAt.toLocaleString() }`;
  }

}
