import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurgoneComponent } from './furgone.component';

describe('FurgoneComponent', () => {
  let component: FurgoneComponent;
  let fixture: ComponentFixture<FurgoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurgoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurgoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
