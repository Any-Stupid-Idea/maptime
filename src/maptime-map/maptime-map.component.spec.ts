/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaptimeMapComponent } from './maptime-map.component';

describe('MaptimeMapComponent', () => {
  let component: MaptimeMapComponent;
  let fixture: ComponentFixture<MaptimeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptimeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptimeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
