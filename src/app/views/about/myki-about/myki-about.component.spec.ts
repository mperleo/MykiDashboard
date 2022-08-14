import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykiAboutComponent } from './myki-about.component';

describe('MykiAboutComponent', () => {
  let component: MykiAboutComponent;
  let fixture: ComponentFixture<MykiAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MykiAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MykiAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
