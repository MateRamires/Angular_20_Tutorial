import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiExample } from './get-api-example';

describe('GetApiExample', () => {
  let component: GetApiExample;
  let fixture: ComponentFixture<GetApiExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
