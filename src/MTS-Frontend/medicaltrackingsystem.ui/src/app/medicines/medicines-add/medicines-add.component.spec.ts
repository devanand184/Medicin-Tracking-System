import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesAddComponent } from './medicines-add.component';

describe('MedicinesAddComponent', () => {
  let component: MedicinesAddComponent;
  let fixture: ComponentFixture<MedicinesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
