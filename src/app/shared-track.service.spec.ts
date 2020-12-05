/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedTrackService } from './shared-track.service';

describe('Service: SharedTrack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedTrackService]
    });
  });

  it('should ...', inject([SharedTrackService], (service: SharedTrackService) => {
    expect(service).toBeTruthy();
  }));
});
