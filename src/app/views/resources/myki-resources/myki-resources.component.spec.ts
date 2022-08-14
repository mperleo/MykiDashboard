import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykiResourcesComponent } from './myki-resources.component';

describe('MykiResourcesComponent', () => {
  let component: MykiResourcesComponent;
  let fixture: ComponentFixture<MykiResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MykiResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MykiResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
