import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreEnComponent } from './core-en.component';

describe('CoreEnComponent', () => {
  let component: CoreEnComponent;
  let fixture: ComponentFixture<CoreEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
