import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManagerPageComponent } from './form-manager-page.component';

describe('FormManagerPageComponent', () => {
  let component: FormManagerPageComponent;
  let fixture: ComponentFixture<FormManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
