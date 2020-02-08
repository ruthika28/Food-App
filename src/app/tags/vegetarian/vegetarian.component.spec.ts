import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianComponent } from './vegetarian.component';

describe('VegetarianComponent', () => {
  let component: VegetarianComponent;
  let fixture: ComponentFixture<VegetarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
