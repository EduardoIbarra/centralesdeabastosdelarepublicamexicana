import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoxComponent } from './infox.component';

describe('InfoxComponent', () => {
  let component: InfoxComponent;
  let fixture: ComponentFixture<InfoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
