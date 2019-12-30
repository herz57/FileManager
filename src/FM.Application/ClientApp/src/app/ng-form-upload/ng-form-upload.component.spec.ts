import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormUploadComponent } from './ng-form-upload.component';

describe('NgFormUploadComponent', () => {
  let component: NgFormUploadComponent;
  let fixture: ComponentFixture<NgFormUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
