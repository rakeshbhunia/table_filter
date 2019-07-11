import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilltertableComponent } from './filltertable.component';

describe('FilltertableComponent', () => {
  let component: FilltertableComponent;
  let fixture: ComponentFixture<FilltertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilltertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilltertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
