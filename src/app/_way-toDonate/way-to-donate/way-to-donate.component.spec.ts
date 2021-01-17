import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayToDonateComponent } from './way-to-donate.component';

describe('WayToDonateComponent', () => {
  let component: WayToDonateComponent;
  let fixture: ComponentFixture<WayToDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayToDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayToDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
