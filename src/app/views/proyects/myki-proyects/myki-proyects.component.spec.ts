import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykiProyectsComponent } from './myki-proyects.component';

describe('MykiProyectsComponent', () => {
  let component: MykiProyectsComponent;
  let fixture: ComponentFixture<MykiProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MykiProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MykiProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
