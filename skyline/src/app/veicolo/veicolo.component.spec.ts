import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeicoloComponent } from './veicolo.component';

describe('VeicoloComponent', () => {
  let component: VeicoloComponent;
  let fixture: ComponentFixture<VeicoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeicoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeicoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
