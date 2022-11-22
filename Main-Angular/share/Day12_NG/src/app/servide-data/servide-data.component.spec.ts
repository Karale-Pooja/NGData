import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServideDataComponent } from './servide-data.component';

describe('ServideDataComponent', () => {
  let component: ServideDataComponent;
  let fixture: ComponentFixture<ServideDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServideDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServideDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
